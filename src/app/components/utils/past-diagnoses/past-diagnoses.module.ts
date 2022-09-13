import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastDiagnosesRoutingModule } from './past-diagnoses-routing.module';
import { PastDiagnosesComponent } from './past-diagnoses.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [PastDiagnosesComponent],
  imports: [BrowserModule, PastDiagnosesRoutingModule],
})
export class PastDiagnosesModule {}
