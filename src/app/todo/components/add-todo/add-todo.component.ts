import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../services/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [  CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  item: Todo = { _id: '', name: '', description: '', status: false };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.todoService.getItem(id).subscribe((data: Todo) => {
        this.item = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEdit && this.item._id) {
      this.todoService.updateItem(this.item._id, true)
        .subscribe(() => {
          this.router.navigate(['/todo/todo-list']);
        });
    } else {
      this.todoService.addItem(this.item)
        .subscribe(() => {
          this.router.navigate(['/todo/todo-list']);
        });
    }
  }

  deleteItem(): void {
    if (this.isEdit && this.item._id) {
      this.todoService.deleteItem(this.item._id).subscribe(() => {
        this.router.navigate(['/todo/todo-list']);
      });
    }
  }

  onCancelClick(){
    this.router.navigate(['/todo/todo-list']);
  }
}
