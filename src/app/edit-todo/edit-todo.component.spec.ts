import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoComponent } from './edit-todo.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Todo, TodoService } from '../todo.service';

describe('EditTodoComponent', () => {
  let component: EditTodoComponent;
  let fixture: ComponentFixture<EditTodoComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
          imports: [ FormsModule ],
          declarations: [ EditTodoComponent ],
          providers: [
            {
              provide: ActivatedRoute,
              useValue: {
                params: of([ { id: 2 } ])
              }
            },
            {
              provide: TodoService,
              useValue: {
                getTodo: ( index ) => {
                  console.log('tets')
                  return {
                    name: 'test',
                    id: '2',
                    done: false
                  };
                }
              }
            }
          ],
          schemas: [ NO_ERRORS_SCHEMA ],
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoComponent);
    component = fixture.componentInstance;
    component.data = {
      name: 'test todo',
      id: 2,
      done: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
