import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Components/form/form.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistrarComponent } from './Components/form/registrar/registrar.component';
import { CalcularComponent } from './Components/form/calcular/calcular.component';
import { NavbarComponent } from './Components/form/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Angular Material
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrarService } from 'src/app/services/registrar.service';
import { RegisterUserComponent } from './Components/register-user/register-user.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { ResultViewComponent } from './Components/form/calcular/result-view/result-view.component'; 

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    RegistrarComponent,
    CalcularComponent,
    NavbarComponent,
    RegisterUserComponent,
    ResultViewComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularToastifyModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [RegistrarService, ToastService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
