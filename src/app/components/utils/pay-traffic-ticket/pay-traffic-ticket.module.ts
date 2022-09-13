import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayTrafficTicketRoutingModule } from './pay-traffic-ticket-routing.module';
import { PayTrafficTicketComponent } from './pay-traffic-ticket.component';


@NgModule({
  declarations: [
    PayTrafficTicketComponent
  ],
  imports: [
    CommonModule,
    PayTrafficTicketRoutingModule
  ]
})
export class PayTrafficTicketModule { }
