import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryMapComponent } from './inquiry-map.component';

describe('InquiryMapComponent', () => {
  let component: InquiryMapComponent;
  let fixture: ComponentFixture<InquiryMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
