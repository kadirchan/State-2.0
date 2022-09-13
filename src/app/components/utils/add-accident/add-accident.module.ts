import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAccidentRoutingModule } from './add-accident-routing.module';
import { AddAccidentComponent } from './add-accident.component';


@NgModule({
  declarations: [
    AddAccidentComponent
  ],
  imports: [
    CommonModule,
    AddAccidentRoutingModule
  ]
})
export class AddAccidentModule { }
