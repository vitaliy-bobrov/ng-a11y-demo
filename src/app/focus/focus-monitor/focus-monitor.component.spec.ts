import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusMonitorComponent } from './focus-monitor.component';

describe('FocusMonitorComponent', () => {
  let component: FocusMonitorComponent;
  let fixture: ComponentFixture<FocusMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
