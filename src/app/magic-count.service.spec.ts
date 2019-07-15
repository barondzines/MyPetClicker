import { TestBed } from '@angular/core/testing';

import { MagicCountService } from './magic-count.service';

describe('MagicCountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicCountService = TestBed.get(MagicCountService);
    expect(service).toBeTruthy();
  });
});
