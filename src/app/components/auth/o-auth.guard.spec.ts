import { TestBed } from '@angular/core/testing';

import { OAuthGuard } from './o-auth.guard';

describe('OAuthGuard', () => {
  let guard: OAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
