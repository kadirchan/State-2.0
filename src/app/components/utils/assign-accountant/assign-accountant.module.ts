import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignAccountantRoutingModule } from './assign-accountant-routing.module';
import { AssignAccountantComponent } from './assign-accountant.component';


@NgModule({
  declarations: [
    AssignAccountantComponent
  ],
  imports: [
    CommonModule,
    AssignAccountantRoutingModule
  ]
})
export class AssignAccountantModule { }
