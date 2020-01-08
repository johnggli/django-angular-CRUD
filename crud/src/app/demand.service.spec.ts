import { TestBed } from '@angular/core/testing';

import { DemandService } from './demand.service';

describe('DemandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandService = TestBed.get(DemandService);
    expect(service).toBeTruthy();
  });
});
