import { Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatSidenavModule, CustomSidenavComponent, RouterModule, MatButtonModule, ButtonModule, ToastModule,ConfirmPopupModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers: [ConfirmationService, MessageService]
})
export class AdminComponent {

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService){

  }
  collapsed = signal(false);
  authService = inject(AuthService)


  sideNavWidth = computed( () => this.collapsed() ? '65px' : '250px');


  logout(event:Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to logout?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      accept: () => {
        // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Logout', life: 3000 });
        this.authService.logout();
      },
      reject: () => {
          // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: '', life: 3000 });
      }
  });
  }

}
