import { TestBed } from '@angular/core/testing';

import { IdGuardService } from './id-guard.service';

describe('AuthGuardService', () => {
  let service: IdGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
