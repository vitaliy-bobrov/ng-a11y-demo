import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbientSensorComponent } from './ambient-sensor/ambient-sensor.component';

const routes: Routes = [
  {
    path: '',
    component: AmbientSensorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbientSensorRoutingModule {}
