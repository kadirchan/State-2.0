import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitizienPanelComponent } from './citizien-panel.component';
import { PastDiagnosesComponent } from '../utils/past-diagnoses/past-diagnoses.component';
import { PastAccidentsComponent } from '../utils/past-accidents/past-accidents.component';
import { PayTrafficTicketComponent } from '../utils/pay-traffic-ticket/pay-traffic-ticket.component';
import { DepositWithdrawComponent } from '../utils/deposit-withdraw/deposit-withdraw.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: CitizienPanelComponent,
    children: [
      {
        path: 'past-accidents',
        component: PastAccidentsComponent,
      },
      {
        path: 'past-diagnoses',
        component: PastDiagnosesComponent,
      },
      {
        path: 'pay-ticket',
        component: PayTrafficTicketComponent,
      },
      {
        path: 'deposit-withdraw',
        component: DepositWithdrawComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizienPanelRoutingModule {}
