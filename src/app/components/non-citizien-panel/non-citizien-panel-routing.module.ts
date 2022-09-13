import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonCitizienPanelComponent } from './non-citizien-panel.component';
import { RegisterNewCitizienComponent } from '../utils/register-new-citizien/register-new-citizien.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'register',
  },
  {
    path: 'register',
    component: RegisterNewCitizienComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonCitizienPanelRoutingModule {}
