import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastDiagnosesComponent } from './past-diagnoses.component';

const routes: Routes = [{ path: '', component: PastDiagnosesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastDiagnosesRoutingModule { }
