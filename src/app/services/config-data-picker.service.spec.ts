import { TestBed } from '@angular/core/testing';

import { ConfigDataPickerService } from './config-data-picker.service';

describe('ConfigDataPickerService', () => {
  let service: ConfigDataPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigDataPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
