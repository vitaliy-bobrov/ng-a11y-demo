import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbientLightSensorService implements OnDestroy {
  private illuminanceSub$ = new Subject<number>();
  private sensor: AmbientLightSensor;

  illuminance$ = this.illuminanceSub$.asObservable();

  start() {
    if ('AmbientLightSensor' in window) {
      this.sensor = new AmbientLightSensor();
      this.sensor.onactivate = () => console.log('active');
      this.sensor.onreading = () => this.illuminanceSub$.next(this.sensor.illuminance);
      this.sensor.onerror = event => console.log(event);
      this.sensor.start();
    }
  }

  ngOnDestroy() {
    if (this.sensor) {
      this.sensor.stop();
    }

    this.illuminanceSub$.complete();
  }
}
