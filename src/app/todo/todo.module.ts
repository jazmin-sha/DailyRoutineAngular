import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';

const todoRoutes: Routes = [
  {
    path: 'todo-add',
    component:AddTodoComponent
    // loadComponent: () => import('../todo/components/add-todo/add-todo.component').then(m => m.AddTodoComponent)
  },
  {
    path: 'todo-list',
    component:ListTodoComponent
    // loadComponent: () => import('../todo/components/list-todo/list-todo.component').then(m => m.ListTodoComponent)
  },
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(todoRoutes)
  ],
  exports: [RouterModule]
})
export class TodoModule {}
