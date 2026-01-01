import { TestBed } from '@angular/core/testing';

import { SendInformation } from './send-information';

describe('SendInformation', () => {
  let service: SendInformation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendInformation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
