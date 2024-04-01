import { TestBed } from '@angular/core/testing';

import { PhotogallaryService } from './photogallary.service';

describe('PhotogallaryService', () => {
  let service: PhotogallaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotogallaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
