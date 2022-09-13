import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresidentPanelComponent } from './president-panel.component';
import { AssignPoliceComponent } from '../utils/assign-police/assign-police.component';
import { AssignDoctorComponent } from '../utils/assign-doctor/assign-doctor.component';
import { TransferPresidentComponent } from '../utils/transfer-president/transfer-president.component';
import { AssignAccountantComponent } from '../utils/assign-accountant/assign-accountant.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: PresidentPanelComponent,
    children: [
      {
        path: 'assign-accountant',
        component: AssignAccountantComponent,
      },
      {
        path: 'assign-police',
        component: AssignPoliceComponent,
      },
      {
        path: 'assign-doctor',
        component: AssignDoctorComponent,
      },
      {
        path: 'transfer-president',
        component: TransferPresidentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresidentPanelRoutingModule {}
