import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://localhost:3002/api/items';

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  getItem(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  addItem(item: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}/add`, item);
  }

  updateItem(id: string, item: boolean): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, item);
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
