import { TestBed, inject } from '@angular/core/testing';

import { LastdataService } from './lastdata.service';

describe('LastdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastdataService]
    });
  });

  it('should be created', inject([LastdataService], (service: LastdataService) => {
    expect(service).toBeTruthy();
  }));
});
