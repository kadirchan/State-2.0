import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicePanelRoutingModule } from './police-panel-routing.module';
import { PolicePanelComponent } from './police-panel.component';

@NgModule({
  declarations: [PolicePanelComponent],
  imports: [CommonModule, PolicePanelRoutingModule],
})
export class PolicePanelModule {}
