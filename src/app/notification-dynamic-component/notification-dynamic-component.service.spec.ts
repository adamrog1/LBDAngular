import { TestBed } from '@angular/core/testing';

import { NotificationDynamicComponentService } from '../notification-dynamic-component/notification-dynamic-component.service';

describe('NotificationDynamicComponentService', () => {
  let service: NotificationDynamicComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationDynamicComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
