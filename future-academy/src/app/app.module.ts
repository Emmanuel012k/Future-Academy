import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; 
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
 import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
 import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './Dashboard/sidebar/sidebar/sidebar.component';
import {MatTabsModule} from '@angular/material/tabs';
 import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UpdateProfileComponent } from './fresher/update-profile/update-profile.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    UpdateProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule, MatSelectModule,
    FormsModule,MatInputModule,
    MatToolbarModule,MatSidenavModule,
    MatTabsModule,MatButtonModule, MatDividerModule,
    MatTooltipModule,MatCheckboxModule,MatRadioModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
