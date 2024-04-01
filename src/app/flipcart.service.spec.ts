import { TestBed } from '@angular/core/testing';

import { FlipcartService } from './flipcart.service';

describe('FlipcartService', () => {
  let service: FlipcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
