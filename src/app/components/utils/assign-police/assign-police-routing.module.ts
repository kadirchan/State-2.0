import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignPoliceComponent } from './assign-police.component';

const routes: Routes = [{ path: '', component: AssignPoliceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignPoliceRoutingModule { }
