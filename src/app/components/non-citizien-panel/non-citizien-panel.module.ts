import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NonCitizienPanelRoutingModule } from './non-citizien-panel-routing.module';
import { NonCitizienPanelComponent } from './non-citizien-panel.component';


@NgModule({
  declarations: [
    NonCitizienPanelComponent
  ],
  imports: [
    CommonModule,
    NonCitizienPanelRoutingModule
  ]
})
export class NonCitizienPanelModule { }
