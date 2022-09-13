import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveTrafficTicketComponent } from './give-traffic-ticket.component';

const routes: Routes = [{ path: '', component: GiveTrafficTicketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiveTrafficTicketRoutingModule { }
