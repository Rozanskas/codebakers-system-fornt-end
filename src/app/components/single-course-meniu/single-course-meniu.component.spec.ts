import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseMeniuComponent } from './single-course-meniu.component';

describe('SingleCourseMeniuComponent', () => {
  let component: SingleCourseMeniuComponent;
  let fixture: ComponentFixture<SingleCourseMeniuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCourseMeniuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCourseMeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
