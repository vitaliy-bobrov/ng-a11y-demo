import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { AmbientLightSensorService } from '../ambient-light-sensor.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ally-ambient-sensor',
  templateUrl: './ambient-sensor.component.html',
  styleUrls: ['./ambient-sensor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmbientSensorComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private darkModeLuxThreshold = 50;
  private isDarkMode = false;
  illuminance: number;

  constructor(
    private sensor: AmbientLightSensorService,
    private cd: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.sensor.start();
    this.sensor.illuminance$.pipe(takeUntil(this.destroy$))
    .subscribe(value => {
      this.illuminance = value;
      this._updateTheme(value);
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  _updateTheme(lux: number) {
    const isDark = lux < this.darkModeLuxThreshold;

    if (isDark === this.isDarkMode) {
      return;
    }

    this.isDarkMode = isDark;

    if (isDark) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
