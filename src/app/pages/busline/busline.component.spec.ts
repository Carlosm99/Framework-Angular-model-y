import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuslineComponent } from './busline.component';

describe('BuslineComponent', () => {
  let component: BuslineComponent;
  let fixture: ComponentFixture<BuslineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuslineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuslineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
