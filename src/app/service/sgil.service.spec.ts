import { TestBed } from '@angular/core/testing';

import { SgilService } from './sgil.service';

describe('SgilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SgilService = TestBed.get(SgilService);
    expect(service).toBeTruthy();
  });
});
