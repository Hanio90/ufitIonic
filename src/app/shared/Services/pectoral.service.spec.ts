import { TestBed } from '@angular/core/testing';

import { PectoralService } from './pectoral.service';

describe('PectoralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PectoralService = TestBed.get(PectoralService);
    expect(service).toBeTruthy();
  });
});
