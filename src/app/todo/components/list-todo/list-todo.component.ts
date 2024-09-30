import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DashboardComponent } from '../../../shared/components/dashboard/dashboard.component';
import { SidebarComponent } from '../../../layout/sidebar/sidebar.component';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { Todo } from '../../services/todo';

@Component({
  selector: 'app-list-todo',
  standalone: true,
  imports: [HttpClientModule, CommonModule, DashboardComponent, SidebarComponent],
  templateUrl: './list-todo.component.html',
  styleUrl: './list-todo.component.css'
})
export class ListTodoComponent {
  items: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.todoService.getAllItems().subscribe({
      next: (data: Todo[]) => this.items = data,
      error: (err) => console.error('Error fetching items:', err)
    });
  }

  updateStatus(itemId: string, completed: boolean): void {
    this.todoService.updateItem(itemId, completed).subscribe({
      next: () => this.loadItems(), // Refresh the list to reflect the updated status
      error: (err) => console.error('Error updating status:', err)
    });
  }

  handleCheckboxChange(itemId: string, event: Event): void {
    const target = event.target as HTMLInputElement;
    const completed = target.checked;
    this.updateStatus(itemId, completed);
}

deleteItem(id: string): void {
    this.todoService.deleteItem(id).subscribe({
        next: () => this.items = this.items.filter(item => item._id !== id),
        error: (err) => console.error('Error deleting item:', err)
    });
}

addItem(): void {
    this.router.navigate(['/todo/todo-add']);
}
}