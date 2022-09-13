import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetSalaryComponent } from './set-salary.component';

const routes: Routes = [{ path: '', component: SetSalaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetSalaryRoutingModule { }
