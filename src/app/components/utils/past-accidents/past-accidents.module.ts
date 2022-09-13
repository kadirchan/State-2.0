import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastAccidentsRoutingModule } from './past-accidents-routing.module';
import { PastAccidentsComponent } from './past-accidents.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [PastAccidentsComponent],
  imports: [CommonModule, BrowserModule, PastAccidentsRoutingModule],
})
export class PastAccidentsModule {}
