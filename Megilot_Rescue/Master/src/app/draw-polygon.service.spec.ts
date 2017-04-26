/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrawPolygonService } from './draw-polygon.service';

describe('DrawPolygonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrawPolygonService]
    });
  });

  it('should ...', inject([DrawPolygonService], (service: DrawPolygonService) => {
    expect(service).toBeTruthy();
  }));
});
