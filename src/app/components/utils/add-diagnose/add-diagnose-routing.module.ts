import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDiagnoseComponent } from './add-diagnose.component';

const routes: Routes = [{ path: '', component: AddDiagnoseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDiagnoseRoutingModule { }
