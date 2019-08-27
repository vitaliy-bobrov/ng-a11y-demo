import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DropdownComponent } from './axe-test/dropdown/dropdown.component';

const routes: Routes = [
  {
    path: 'ambient-sensor',
    loadChildren: () => import('./ambient-sensor/ambient-sensor.module').then(m => m.AmbientSensorModule)
  },
  {
    path: 'focus',
    loadChildren: () => import('./focus/focus.module').then(m => m.FocusModule)
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
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
