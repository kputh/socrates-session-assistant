import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed, inject} from '@angular/core/testing';

import {SessionDataService} from './session-data.service';

describe('SessionDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SessionDataService]
    });
  });

  it('should be created', inject([SessionDataService], (service: SessionDataService) => {
    expect(service).toBeTruthy();
  }));
});
