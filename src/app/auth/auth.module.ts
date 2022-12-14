import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';
import { AppAuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [CommonModule, AppMaterialModule, FormsModule, AppAuthRoutingModule],
})
export class AppAuthModule {}
