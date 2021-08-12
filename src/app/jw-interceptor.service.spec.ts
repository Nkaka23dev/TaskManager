import { TestBed } from '@angular/core/testing';

import { JwInterceptorService } from './jw-interceptor.service';

describe('JwInterceptorService', () => {
  let service: JwInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
