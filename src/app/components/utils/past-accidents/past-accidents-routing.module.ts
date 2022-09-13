import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastAccidentsComponent } from './past-accidents.component';

const routes: Routes = [{ path: '', component: PastAccidentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastAccidentsRoutingModule { }
