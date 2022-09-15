import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectWalletComponent } from './components/connect-wallet/connect-wallet.component';
import { PastAccidentsModule } from './components/utils/past-accidents/past-accidents.module';
import { PastDiagnosesModule } from './components/utils/past-diagnoses/past-diagnoses.module';

@NgModule({
  declarations: [AppComponent, ConnectWalletComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PastDiagnosesModule,
    PastAccidentsModule,
  ],
  providers: [{ provide: Window, useValue: window }], // window object
  bootstrap: [AppComponent],
})
export class AppModule {}
