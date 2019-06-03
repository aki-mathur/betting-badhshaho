import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';
import { from } from 'rxjs';
import { MatchComponent } from './match/match.component';
import { AngularTokenModule } from 'angular-token';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TeamComponent,
    MatchComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://betting-badshaho-api.herokuapp.com'
    })
  ],
  providers: [ AngularTokenModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
