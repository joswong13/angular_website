import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateDisplayComponent } from './calculate-display.component';

describe('CalculateDisplayComponent', () => {
  let component: CalculateDisplayComponent;
  let fixture: ComponentFixture<CalculateDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
