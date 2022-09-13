import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetSalaryRoutingModule } from './set-salary-routing.module';
import { SetSalaryComponent } from './set-salary.component';


@NgModule({
  declarations: [
    SetSalaryComponent
  ],
  imports: [
    CommonModule,
    SetSalaryRoutingModule
  ]
})
export class SetSalaryModule { }
