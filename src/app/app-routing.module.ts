import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'doctor',
    loadChildren: () =>
      import('./components/doctor-panel/doctor-panel.module').then(
        (m) => m.DoctorPanelModule
      ),
  },
  {
    path: 'police',
    loadChildren: () =>
      import('./components/police-panel/police-panel.module').then(
        (m) => m.PolicePanelModule
      ),
  },
  {
    path: 'president',
    loadChildren: () =>
      import('./components/president-panel/president-panel.module').then(
        (m) => m.PresidentPanelModule
      ),
  },
  {
    path: 'accountant',
    loadChildren: () =>
      import('./components/accountant-panel/accountant-panel.module').then(
        (m) => m.AccountantPanelModule
      ),
  },
  {
    path: 'citizien',
    loadChildren: () =>
      import('./components/citizien-panel/citizien-panel.module').then(
        (m) => m.CitizienPanelModule
      ),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./components/welcome-panel/welcome-panel.module').then(
        (m) => m.WelcomePanelModule
      ),
  },
  {
    path: 'non-citizien',
    loadChildren: () =>
      import('./components/non-citizien-panel/non-citizien-panel.module').then(
        (m) => m.NonCitizienPanelModule
      ),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./components/welcome-panel/welcome-panel.module').then(
        (m) => m.WelcomePanelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
