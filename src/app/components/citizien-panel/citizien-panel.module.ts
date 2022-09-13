import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitizienPanelRoutingModule } from './citizien-panel-routing.module';
import { CitizienPanelComponent } from './citizien-panel.component';


@NgModule({
  declarations: [
    CitizienPanelComponent
  ],
  imports: [
    CommonModule,
    CitizienPanelRoutingModule
  ]
})
export class CitizienPanelModule { }
