/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarkerService } from './marker.service';

describe('MarkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkerService]
    });
  });

  it('should ...', inject([MarkerService], (service: MarkerService) => {
    expect(service).toBeTruthy();
  }));
});
