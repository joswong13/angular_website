import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateValueComponent } from './calculate-value.component';

describe('CalculateValueComponent', () => {
  let component: CalculateValueComponent;
  let fixture: ComponentFixture<CalculateValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
