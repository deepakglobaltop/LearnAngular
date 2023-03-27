import { TestBed } from '@angular/core/testing';

import { CommonshellService } from './commonshell.service';

describe('CommonshellService', () => {
  let service: CommonshellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonshellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
