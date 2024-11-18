import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSidenavComponent } from "./custom-sidenav/custom-sidenav.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    // CustomSidenavComponent,
    MatDialogModule,
    HomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private dialog: MatDialog){

  }

  authService = inject(AuthService)
  router = inject(Router)
  title = 'CODER';
  collapsed = signal(false);
  userLoggedIn:boolean = false;
  loggedinUserObj: any;

  sideNavWidth = computed( () => this.collapsed() ? '65px' : '250px');


  ngOnInit(): void {
    this.authService.userLoggedIn.subscribe(response => {
      this.userLoggedIn = response;
    });
  }
  openLoginWindow(){
    this.dialog.open(LoginComponent, {
      width: '50%'
    })
  }
}
