import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaySalaryComponent } from '../utils/pay-salary/pay-salary.component';
import { SetSalaryComponent } from '../utils/set-salary/set-salary.component';
import { AccountantPanelComponent } from './accountant-panel.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: AccountantPanelComponent,
    children: [
      {
        path: 'set-salary',
        component: SetSalaryComponent,
      },
      {
        path: 'pay-salary',
        component: PaySalaryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountantPanelRoutingModule {}
