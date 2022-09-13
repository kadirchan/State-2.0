import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterNewCitizienComponent } from './register-new-citizien.component';

const routes: Routes = [{ path: '', component: RegisterNewCitizienComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterNewCitizienRoutingModule { }
