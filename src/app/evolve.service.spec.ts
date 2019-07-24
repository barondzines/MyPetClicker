import { TestBed } from '@angular/core/testing';

import { EvolveService } from './evolve.service';

describe('EvolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvolveService = TestBed.get(EvolveService);
    expect(service).toBeTruthy();
  });
});
