import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbientSensorRoutingModule } from './ambient-sensor-routing.module';
import { AmbientSensorComponent } from './ambient-sensor/ambient-sensor.component';

@NgModule({
  declarations: [AmbientSensorComponent],
  imports: [
    CommonModule,
    AmbientSensorRoutingModule
  ]
})
export class AmbientSensorModule {}
