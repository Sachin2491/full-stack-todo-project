import { TestBed } from '@angular/core/testing';

import { AuthenticationGurdService } from './authentication-gurd.service';

describe('AuthenticationGurdService', () => {
  let service: AuthenticationGurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationGurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
