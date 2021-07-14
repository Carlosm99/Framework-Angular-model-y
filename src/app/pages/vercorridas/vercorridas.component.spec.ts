import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VercorridasComponent } from './vercorridas.component';

describe('VercorridasComponent', () => {
  let component: VercorridasComponent;
  let fixture: ComponentFixture<VercorridasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VercorridasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VercorridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
