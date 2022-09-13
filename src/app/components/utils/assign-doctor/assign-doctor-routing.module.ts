import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignDoctorComponent } from './assign-doctor.component';

const routes: Routes = [{ path: '', component: AssignDoctorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignDoctorRoutingModule { }
