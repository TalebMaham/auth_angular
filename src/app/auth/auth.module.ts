import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Ajoute cette ligne
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule  // Ajoute cette ligne
  ],
  declarations: [LoginComponent],
})
export class AuthModule { }
