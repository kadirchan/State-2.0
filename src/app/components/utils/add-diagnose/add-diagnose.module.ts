import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDiagnoseRoutingModule } from './add-diagnose-routing.module';
import { AddDiagnoseComponent } from './add-diagnose.component';


@NgModule({
  declarations: [
    AddDiagnoseComponent
  ],
  imports: [
    CommonModule,
    AddDiagnoseRoutingModule
  ]
})
export class AddDiagnoseModule { }
