import { TestBed } from '@angular/core/testing';

import { MusicSerService } from './music-ser.service';

describe('MusicSerService', () => {
  let service: MusicSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
