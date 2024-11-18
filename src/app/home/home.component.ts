import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private dialog: MatDialog){

  }
  authService = inject(AuthService)
  router = inject(Router)
  loggedinUserObj: any

  ngOnInit(): void {
    this.loggedinUserObj = this.authService.getLoggedinUserObject()

    if(this.loggedinUserObj && this.loggedinUserObj.token && this.loggedinUserObj.token!=null){
      this.router.navigateByUrl("admin")
    }
  }

  openLoginWindow(){
    this.dialog.open(LoginComponent, {
      width: '50%'
    })
  }

}
