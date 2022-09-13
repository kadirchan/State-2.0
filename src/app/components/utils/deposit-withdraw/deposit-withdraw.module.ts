import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositWithdrawRoutingModule } from './deposit-withdraw-routing.module';
import { DepositWithdrawComponent } from './deposit-withdraw.component';


@NgModule({
  declarations: [
    DepositWithdrawComponent
  ],
  imports: [
    CommonModule,
    DepositWithdrawRoutingModule
  ]
})
export class DepositWithdrawModule { }
