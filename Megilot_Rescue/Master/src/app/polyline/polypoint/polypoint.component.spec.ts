/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PolypointComponent } from './polypoint.component';

describe('PolypointComponent', () => {
  let component: PolypointComponent;
  let fixture: ComponentFixture<PolypointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolypointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
