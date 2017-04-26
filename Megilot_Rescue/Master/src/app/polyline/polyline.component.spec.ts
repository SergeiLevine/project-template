/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PolylineComponent } from './polyline.component';

describe('PolylineComponent', () => {
  let component: PolylineComponent;
  let fixture: ComponentFixture<PolylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
