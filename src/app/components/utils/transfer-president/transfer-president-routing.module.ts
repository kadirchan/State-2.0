import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferPresidentComponent } from './transfer-president.component';

const routes: Routes = [{ path: '', component: TransferPresidentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferPresidentRoutingModule { }
