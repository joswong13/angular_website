import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstModalPageComponent } from './first-modal-page.component';

describe('FirstModalPageComponent', () => {
  let component: FirstModalPageComponent;
  let fixture: ComponentFixture<FirstModalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstModalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstModalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
