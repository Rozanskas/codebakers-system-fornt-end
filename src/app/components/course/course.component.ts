import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course';
import { CourseService } from 'src/app/service/course.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  nameOfImage = new BehaviorSubject<string>("java");

  courses: Course[];
  course: Course;

  constructor(public courseService: CourseService) { }

  ngOnInit() {
    this.getAllCourses();
    
  }
  getAllCourses() {

    this.courseService.getCourses().subscribe(
      res => {

        this.courses = res;
        this.course = this.courses[0];
      }, error => {
        alert("There was an error retrieving courses");
      }
    );
  }

  imageName(): Observable<string> {
    return this.nameOfImage.asObservable();
  }

  showCourse(i: number) {
    this.nameOfImage.next(this.courses[i].name);
    this.course = this.courses[i];
    

  }

}
