import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoIteamComponentComponent } from './to-do-iteam-component.component';

describe('ToDoIteamComponentComponent', () => {
  let component: ToDoIteamComponentComponent;
  let fixture: ComponentFixture<ToDoIteamComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoIteamComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoIteamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
