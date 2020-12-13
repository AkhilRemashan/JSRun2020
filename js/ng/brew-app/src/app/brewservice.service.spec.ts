import { TestBed } from '@angular/core/testing';

import { BrewserviceService } from './brewservice.service';

describe('BrewserviceService', () => {
  let service: BrewserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
