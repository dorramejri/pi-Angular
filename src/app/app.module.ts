import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NpnSliderModule } from 'npn-slider';
import { LocationComponent } from './features/location/location.component';
import { SliderComponent } from './home/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { EquipementComponent } from './features/equipement/equipement.component';
import { VisiteComponent } from './features/visite/visite.component';
import { EcoleComponent } from './features/ecole/ecole.component';
import { CompetitionComponent } from './features/competition/competition.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { TeacherRegistrationComponent } from './auth/teacher-registration/teacher-registration.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    TeacherRegistrationComponent,
    LocationComponent,
    SliderComponent,
    EquipementComponent,
    VisiteComponent,
    EcoleComponent,
    CompetitionComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NpnSliderModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
