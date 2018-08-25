import { TestBed, inject } from '@angular/core/testing';

import { KnownLocationsDataService } from './known-locations-data.service';

describe('KnownLocationsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KnownLocationsDataService]
    });
  });

  it('should be created', inject([KnownLocationsDataService], (service: KnownLocationsDataService) => {
    expect(service).toBeTruthy();
  }));
});
