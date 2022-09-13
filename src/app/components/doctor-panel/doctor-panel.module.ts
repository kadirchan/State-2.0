import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorPanelRoutingModule } from './doctor-panel-routing.module';
import { DoctorPanelComponent } from './doctor-panel.component';


@NgModule({
  declarations: [
    DoctorPanelComponent
  ],
  imports: [
    CommonModule,
    DoctorPanelRoutingModule
  ]
})
export class DoctorPanelModule { }
