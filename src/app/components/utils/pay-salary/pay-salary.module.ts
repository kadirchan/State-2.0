import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaySalaryRoutingModule } from './pay-salary-routing.module';
import { PaySalaryComponent } from './pay-salary.component';


@NgModule({
  declarations: [
    PaySalaryComponent
  ],
  imports: [
    CommonModule,
    PaySalaryRoutingModule
  ]
})
export class PaySalaryModule { }
