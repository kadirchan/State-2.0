import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorPanelComponent } from './doctor-panel.component';
import { AddDiagnoseComponent } from '../utils/add-diagnose/add-diagnose.component';
import { PastDiagnosesComponent } from '../utils/past-diagnoses/past-diagnoses.component';
import { MakeAppoinmentComponent } from '../utils/make-appoinment/make-appoinment.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DoctorPanelComponent,
    children: [
      {
        path: 'add-diagnose',
        component: AddDiagnoseComponent,
      },
      {
        path: 'past-diagnoses',
        component: PastDiagnosesComponent,
      },
      {
        path: 'make-appoinment',
        component: MakeAppoinmentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorPanelRoutingModule {}
