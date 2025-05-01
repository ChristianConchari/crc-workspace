import { TestBed } from '@angular/core/testing';

import { CrcSideMenuService } from './crc-side-menu.service';

describe('CrcSideMenuService', () => {
  let service: CrcSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrcSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
