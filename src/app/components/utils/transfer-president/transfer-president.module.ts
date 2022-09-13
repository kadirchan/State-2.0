import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferPresidentRoutingModule } from './transfer-president-routing.module';
import { TransferPresidentComponent } from './transfer-president.component';


@NgModule({
  declarations: [
    TransferPresidentComponent
  ],
  imports: [
    CommonModule,
    TransferPresidentRoutingModule
  ]
})
export class TransferPresidentModule { }
