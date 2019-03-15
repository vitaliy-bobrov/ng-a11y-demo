const axe = require('axe-core');
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;
  let dropdownDe: DebugElement;
  let dropdownEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DropdownComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    dropdownDe = fixture.debugElement;
    dropdownEl = dropdownDe.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be accessible on initial state', (done) => {
    axe.run(dropdownEl, (err, result) => {
      if (result.violations.length > 0) {
        console.log(JSON.stringify(result.violations, null, 4));
      }

      expect(err).toBe(null);
      expect(result.violations.length).toBe(0);
      done();
    });
  });

  it('should be accessible when expanded', (done) => {
    component.toggle.nativeElement.click();
    fixture.detectChanges();

    axe.run(dropdownEl, (err, result) => {
      if (result.violations.length > 0) {
        console.log(JSON.stringify(result.violations, null, 4));
      }

      expect(err).toBe(null);
      expect(result.violations.length).toBe(0);
      done();
    });
  });
});
