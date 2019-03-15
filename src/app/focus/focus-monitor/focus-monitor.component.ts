import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'ally-focus-monitor',
  templateUrl: './focus-monitor.component.html',
  styleUrls: ['./focus-monitor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FocusMonitorComponent implements OnInit, OnDestroy {
  element = 'body';
  private interval;

  constructor(private cd: ChangeDetectorRef) {
    this.findFocused = this.findFocused.bind(this);
  }

  ngOnInit() {
    this.interval = setInterval(this.findFocused, 300);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  private findFocused() {
    const element = document.querySelector(':focus');
    const classes = element ? element.className.split(' ').join('.') : '';

    if (element === null) {
      this.element = 'body';
    } else {
      this.element = `${element.tagName.toLowerCase()}.${classes} ${element.textContent}`;
    }

    this.cd.detectChanges();
  }
}
