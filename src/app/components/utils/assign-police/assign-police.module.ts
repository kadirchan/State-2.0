import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignPoliceRoutingModule } from './assign-police-routing.module';
import { AssignPoliceComponent } from './assign-police.component';


@NgModule({
  declarations: [
    AssignPoliceComponent
  ],
  imports: [
    CommonModule,
    AssignPoliceRoutingModule
  ]
})
export class AssignPoliceModule { }
