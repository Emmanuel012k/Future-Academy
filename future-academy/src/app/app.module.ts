import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
 
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { FresherRegisterComponent } from './fresher/fresher-register/fresher-register.component';
import { ExperienceRegisterComponent } from './experience/experience-register/experience-register.component';
import { FreelancerRegisterComponent } from './freelancer/freelancer-register/freelancer-register.component';
import { CorporateRegisterComponent } from './corporate/corporate-register/corporate-register.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    FresherRegisterComponent,
    ExperienceRegisterComponent,
    FreelancerRegisterComponent,
    CorporateRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
