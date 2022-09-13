import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignDoctorRoutingModule } from './assign-doctor-routing.module';
import { AssignDoctorComponent } from './assign-doctor.component';


@NgModule({
  declarations: [
    AssignDoctorComponent
  ],
  imports: [
    CommonModule,
    AssignDoctorRoutingModule
  ]
})
export class AssignDoctorModule { }
