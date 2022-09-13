import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresidentPanelRoutingModule } from './president-panel-routing.module';
import { PresidentPanelComponent } from './president-panel.component';


@NgModule({
  declarations: [
    PresidentPanelComponent
  ],
  imports: [
    CommonModule,
    PresidentPanelRoutingModule
  ]
})
export class PresidentPanelModule { }
