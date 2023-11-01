import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { FresherRegisterComponent } from './fresher/fresher-register/fresher-register.component';
import { ExperienceRegisterComponent } from './experience/experience-register/experience-register.component';
import { FreelancerRegisterComponent } from './freelancer/freelancer-register/freelancer-register.component';
import { CorporateRegisterComponent } from './corporate/corporate-register/corporate-register.component';
 

const routes: Routes = [
  { path: 'register', component:RegisterComponent},
   
  { path: 'fresherregister', component:FresherRegisterComponent},
  { path: 'experienceregister', component:ExperienceRegisterComponent},
  { path: 'freelancerregister', component:FreelancerRegisterComponent},
  { path: 'corporate', component:CorporateRegisterComponent},

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
