import { TestBed } from '@angular/core/testing';

import { JWTauthenticationService } from './jwtauthentication.service';

describe('JWTauthenticationService', () => {
  let service: JWTauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
