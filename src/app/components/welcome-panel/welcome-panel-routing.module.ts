import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePanelComponent } from './welcome-panel.component';

const routes: Routes = [{ path: '', component: WelcomePanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomePanelRoutingModule { }
