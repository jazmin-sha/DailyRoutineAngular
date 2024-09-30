import { Component, Inject } from '@angular/core';
import { SidebarComponent } from "../../../layout/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sidebarVisible = true;

  constructor() {}

  ngAfterViewInit() {
   
  }

  onSidebarToggled(visible: boolean) {
    this.sidebarVisible = visible;
  }
}