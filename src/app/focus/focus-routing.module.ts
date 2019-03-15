import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuFocusTrapComponent } from './menu-focus-trap/menu-focus-trap.component';
import { FocusListComponent } from './focus-list/focus-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'trap',
        component: MenuFocusTrapComponent
      },
      {
        path: 'list',
        component: FocusListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FocusRoutingModule { }
