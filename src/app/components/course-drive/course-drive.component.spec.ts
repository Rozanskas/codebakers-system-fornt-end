import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDriveComponent } from './course-drive.component';

describe('CourseDriveComponent', () => {
  let component: CourseDriveComponent;
  let fixture: ComponentFixture<CourseDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
