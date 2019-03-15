import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbientSensorComponent } from './ambient-sensor.component';

describe('AmbientSensorComponent', () => {
  let component: AmbientSensorComponent;
  let fixture: ComponentFixture<AmbientSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbientSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbientSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
