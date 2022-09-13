import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantPanelRoutingModule } from './accountant-panel-routing.module';
import { AccountantPanelComponent } from './accountant-panel.component';


@NgModule({
  declarations: [
    AccountantPanelComponent
  ],
  imports: [
    CommonModule,
    AccountantPanelRoutingModule
  ]
})
export class AccountantPanelModule { }
