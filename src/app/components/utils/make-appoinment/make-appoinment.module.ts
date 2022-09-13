import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakeAppoinmentRoutingModule } from './make-appoinment-routing.module';
import { MakeAppoinmentComponent } from './make-appoinment.component';


@NgModule({
  declarations: [
    MakeAppoinmentComponent
  ],
  imports: [
    CommonModule,
    MakeAppoinmentRoutingModule
  ]
})
export class MakeAppoinmentModule { }
