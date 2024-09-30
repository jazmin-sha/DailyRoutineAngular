import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() sidebarToggled = new EventEmitter<boolean>();
  sidebarVisible = true;
  menuVisible: boolean = true;
  sideNavList = [
    { path: '/todo/todo-list', icon: 'fas fa-tasks', label: 'Tasks', active: true },
    { path: '/money/money-list', icon: 'fas fa-money-bill', label: 'Money', active: true },
    { path: '/food/food-list', icon: 'fas fa-utensils', label: 'Food', active: true },
    { path: '/calender/calender-list', icon:'fas fa-calendar-alt', label: 'Calender', active: true },
    { path: '/user/profile', icon: 'fas fa-user', label: 'Profile', active: true },
  ];

  constructor(private router: Router) { }

  navigateTo(path: string) {
    console.log('ghj',path)
    this.router.navigate([path]);
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
  
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
