import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFocusTrapComponent } from './menu-focus-trap.component';

describe('MenuFocusTrapComponent', () => {
  let component: MenuFocusTrapComponent;
  let fixture: ComponentFixture<MenuFocusTrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFocusTrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFocusTrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
