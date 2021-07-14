import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbuslineComponent } from './verbusline.component';

describe('VerbuslineComponent', () => {
  let component: VerbuslineComponent;
  let fixture: ComponentFixture<VerbuslineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbuslineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbuslineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
