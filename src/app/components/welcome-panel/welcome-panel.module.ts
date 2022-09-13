import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePanelRoutingModule } from './welcome-panel-routing.module';
import { WelcomePanelComponent } from './welcome-panel.component';


@NgModule({
  declarations: [
    WelcomePanelComponent
  ],
  imports: [
    CommonModule,
    WelcomePanelRoutingModule
  ]
})
export class WelcomePanelModule { }
