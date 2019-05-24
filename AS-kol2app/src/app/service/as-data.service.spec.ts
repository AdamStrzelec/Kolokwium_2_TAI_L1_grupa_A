import { TestBed } from '@angular/core/testing';

import { ASDataService } from './as-data.service';

describe('ASDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ASDataService = TestBed.get(ASDataService);
    expect(service).toBeTruthy();
  });
});
