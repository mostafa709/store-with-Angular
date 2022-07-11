import { TestBed } from '@angular/core/testing';

import { WatchcountService } from './watchcount.service';

describe('WatchcountService', () => {
  let service: WatchcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
