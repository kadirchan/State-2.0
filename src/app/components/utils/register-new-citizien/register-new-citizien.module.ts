import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterNewCitizienRoutingModule } from './register-new-citizien-routing.module';
import { RegisterNewCitizienComponent } from './register-new-citizien.component';


@NgModule({
  declarations: [
    RegisterNewCitizienComponent
  ],
  imports: [
    CommonModule,
    RegisterNewCitizienRoutingModule
  ]
})
export class RegisterNewCitizienModule { }
