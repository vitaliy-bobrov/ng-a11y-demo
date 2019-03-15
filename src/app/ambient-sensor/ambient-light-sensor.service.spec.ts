import { TestBed } from '@angular/core/testing';

import { AmbientLightSensorService } from './ambient-light-sensor.service';

describe('AmbientLightSensorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmbientLightSensorService = TestBed.get(AmbientLightSensorService);
    expect(service).toBeTruthy();
  });
});
