import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FocusRoutingModule } from './focus-routing.module';
import { MenuFocusTrapComponent } from './menu-focus-trap/menu-focus-trap.component';
import { FocusMonitorComponent } from './focus-monitor/focus-monitor.component';
import { FocusListComponent, FocusableTileDirective } from './focus-list/focus-list.component';

@NgModule({
  declarations: [
    MenuFocusTrapComponent,
    FocusMonitorComponent,
    FocusListComponent,
    FocusableTileDirective
  ],
  imports: [
    A11yModule,
    CommonModule,
    FocusRoutingModule
  ]
})
export class FocusModule {}
