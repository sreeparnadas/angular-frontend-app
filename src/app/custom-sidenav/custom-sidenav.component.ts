import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route: string
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterLink],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css' 
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false)
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }
  menuItem = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: 'home'
    },
    {
      icon: 'people',
      label: 'Student Details',
      route: 'student-details'
    },
    {
      icon: 'book',
      label: 'Course Management',
      route: 'course-management'
    },
    {
      icon: 'subject',
      label: 'Subject List',
      route: 'subject-list'
    },
    {
      icon: 'laptop',
      label: 'Exam Management',
      route: 'exam-management'
    },
    {
      icon: 'question_answer',
      label: 'Manage Question Bank',
      route: 'manage-question-bank'
    },
    {
      icon: 'code',
      label: 'Online Test',
      route: 'online-test'
    },
    {
      icon: 'grade',
      label: 'Result',
      route: 'result'
    },
    {
      icon: 'settings',
      label: 'Settings',
      route: 'settings'
    },
  ])

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
