import { TestBed } from '@angular/core/testing';

import { InformationGenaraleService } from './information-genarale.service';

describe('InformationGenaraleService', () => {
  let service: InformationGenaraleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationGenaraleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
