import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeAppoinmentComponent } from './make-appoinment.component';

const routes: Routes = [{ path: '', component: MakeAppoinmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeAppoinmentRoutingModule { }
