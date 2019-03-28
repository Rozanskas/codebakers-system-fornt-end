import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseImageComponent } from './single-course-image.component';

describe('SingleCourseImageComponent', () => {
  let component: SingleCourseImageComponent;
  let fixture: ComponentFixture<SingleCourseImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCourseImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCourseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
