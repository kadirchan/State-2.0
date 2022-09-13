import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicePanelComponent } from './police-panel.component';
import { AddAccidentComponent } from '../utils/add-accident/add-accident.component';
import { PastAccidentsComponent } from '../utils/past-accidents/past-accidents.component';
import { GiveTrafficTicketComponent } from '../utils/give-traffic-ticket/give-traffic-ticket.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: PolicePanelComponent,
    children: [
      {
        path: 'add-accident',
        component: AddAccidentComponent,
      },
      {
        path: 'past-accidents',
        component: PastAccidentsComponent,
      },
      {
        path: 'give-ticket',
        component: GiveTrafficTicketComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicePanelRoutingModule {}
