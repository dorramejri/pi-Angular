import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherRegistrationComponent } from './teacher-registration/teacher-registration.component';

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [RegisterComponent, LoginComponent, TeacherRegistrationComponent, ],
  providers: [],
})
export class NameModule { }
