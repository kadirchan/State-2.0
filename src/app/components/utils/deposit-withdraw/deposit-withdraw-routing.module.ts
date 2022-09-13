import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositWithdrawComponent } from './deposit-withdraw.component';

const routes: Routes = [{ path: '', component: DepositWithdrawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositWithdrawRoutingModule { }
