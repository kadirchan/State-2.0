import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiveTrafficTicketRoutingModule } from './give-traffic-ticket-routing.module';
import { GiveTrafficTicketComponent } from './give-traffic-ticket.component';


@NgModule({
  declarations: [
    GiveTrafficTicketComponent
  ],
  imports: [
    CommonModule,
    GiveTrafficTicketRoutingModule
  ]
})
export class GiveTrafficTicketModule { }
