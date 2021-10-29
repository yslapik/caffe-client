import { TestBed } from '@angular/core/testing';

import { RestDataLoaderService } from './rest-data-loader.service';

describe('RestDataLoaderService', () => {
  let service: RestDataLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestDataLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
