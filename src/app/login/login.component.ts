import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>){

  }

  http = inject(HttpClient)
  authService = inject(AuthService)


  loginValid = true;
  loginObj:any = {
    "email": "",
    "password": ""
  }

  login(){
    try {
      const response = this.authService.login(this.loginObj);
      // Successful login
      this.dialogRef.close();
    } catch (error) {
      // Handle error
    }
  }
}
