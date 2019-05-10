import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

export interface Todo {
  id: number;
  name: string;
  done: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'http://api.stackexchange.com//2.2/questions?order=desc&sort=hot&tagged=angular&site=stackoverflow'

  private todos: Todo[] = [
    { id: 1, name: 'Do laundry', done: false },
    { id: 2, name: 'Do something else', done: false },
    { id: 3, name: 'Do nothing', done: false },
  ];

  constructor(private httpClient: HttpClient) { }

  getTodos(): Todo[] {
    return this.todos;
  }


  // getTodos(): Observable<Todo[]> {
  //   return this.httpClient.get(this.apiUrl).pipe(
  //     map((val: any) => val.items),
  //     map((val: any) => this.mapToTodos(val))
  //   );
  // }

  // mapToTodos(items: any[]): Todo[] {
  //   return items.map(item => {
  //     return { name: item.title, done: false };
  //   });
  // }
}
