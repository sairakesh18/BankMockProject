import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbankdetailsComponent } from './viewbankdetails.component';

describe('ViewbankdetailsComponent', () => {
  let component: ViewbankdetailsComponent;
  let fixture: ComponentFixture<ViewbankdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbankdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewbankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
