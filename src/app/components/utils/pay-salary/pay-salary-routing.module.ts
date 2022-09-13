import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaySalaryComponent } from './pay-salary.component';

const routes: Routes = [{ path: '', component: PaySalaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaySalaryRoutingModule { }
