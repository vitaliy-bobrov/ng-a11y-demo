import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownComponent } from './axe-test/dropdown/dropdown.component';

const routes: Routes = [
  {
    path: 'ambient-sensor',
    loadChildren: './ambient-sensor/ambient-sensor.module#AmbientSensorModule'
  },
  {
    path: 'focus',
    loadChildren: './focus/focus.module#FocusModule'
  },
  {
    path: 'axe',
    component: DropdownComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
