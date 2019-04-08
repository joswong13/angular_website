import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAdminComponent } from './photo-admin.component';

describe('PhotoAdminComponent', () => {
  let component: PhotoAdminComponent;
  let fixture: ComponentFixture<PhotoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
