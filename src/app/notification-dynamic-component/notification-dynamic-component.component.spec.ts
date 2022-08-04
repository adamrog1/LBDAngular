import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDynamicComponentComponent } from './notification-dynamic-component.component';

describe('NotificationDynamicComponentComponent', () => {
  let component: NotificationDynamicComponentComponent;
  let fixture: ComponentFixture<NotificationDynamicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationDynamicComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
