import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayTrafficTicketComponent } from './pay-traffic-ticket.component';

const routes: Routes = [{ path: '', component: PayTrafficTicketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayTrafficTicketRoutingModule { }
