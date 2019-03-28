import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEventsComponent } from './course-events.component';

describe('CourseEventsComponent', () => {
  let component: CourseEventsComponent;
  let fixture: ComponentFixture<CourseEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
