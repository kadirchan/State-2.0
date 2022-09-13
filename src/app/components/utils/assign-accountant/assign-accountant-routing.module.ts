import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignAccountantComponent } from './assign-accountant.component';

const routes: Routes = [{ path: '', component: AssignAccountantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignAccountantRoutingModule { }
