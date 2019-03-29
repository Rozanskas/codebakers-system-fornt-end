import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ComponentServiceService } from 'src/app/service/component-service.service';
import { CourseHomeComponentModel } from 'src/app/model/course-home-component-model';
import { Course } from 'src/app/model/course';
import { Observable } from 'rxjs';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.css'],
})
export class CourseHomeComponent implements OnInit {
  @Input() course: Course;
  clickedCourse:Observable<Course>;
  
  textAreaText: string;
  rows: number;
  columns: number;

  
  constructor(private courseHomeComponentService: ComponentServiceService, private courseComponent: CourseComponent) {
    
    this.clickedCourse=this.courseComponent.getClickedCOurse();
    this.clickedCourse.subscribe((course: Course) => {
     this.textAreaText=course.courseHomeComponent.content;
     this.rows=course.courseHomeComponent.rowsOfTextArea;
     this.columns=course.courseHomeComponent.columns;
      
    });

  }

  ngOnInit() {
    
    this.courseHomeComponentService.getCourseHomeComponent(this.course.id).subscribe((data: CourseHomeComponentModel) => {
      this.textAreaText = data.content;
      this.rows = data.rowsOfTextArea;
      this.columns = data.columns;
    });
  }
  
  rowsAdd1() {
    this.rows = this.rows + 1;
  }
  rowsMinus1() {
    if (this.rows > 1)
      this.rows = this.rows - 1;
  }
  columnsPlus1() {
    if (this.columns < 199)
      this.columns++;
  }
  columnsMinus1() {
    if (this.columns > 1)
      this.columns = this.columns - 1;
  }
  submit(textarea: HTMLTextAreaElement) {
    this.courseHomeComponentService.getCourseHomeComponent(1).subscribe((data: CourseHomeComponentModel) => {
      this.textAreaText = data.content;
      this.rows = data.rowsOfTextArea;
      this.columns = data.columns;
    });
  }

}
