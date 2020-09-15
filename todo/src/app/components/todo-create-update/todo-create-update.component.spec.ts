import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCreateUpdateComponent } from './todo-create-update.component';

describe('TodoCreateUpdateComponent', () => {
  let component: TodoCreateUpdateComponent;
  let fixture: ComponentFixture<TodoCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
