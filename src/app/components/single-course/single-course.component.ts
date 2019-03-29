import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/model/course';
import { Observable, BehaviorSubject } from 'rxjs';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  clickedImagename: Observable<string>;
  clickedCourse: Observable<Course>;
  @Input() course: Course;
  @Input() imageName: string;
  name: string;
  clickedmenuName:string;
  

  constructor(private courseComponent: CourseComponent) {
    this.clickedImagename = courseComponent.imageName();
    this.clickedCourse = courseComponent.courseClicked;
    this.clickedImagename.subscribe(name => {
      this.name = "assets\/img\/" + name + ".png";
    });
    this.clickedCourse.subscribe((course:Course)=>{this.course=course});
  }

  ngOnInit() {
    this.name = "assets\/img\/" + this.imageName + ".png";
  }
  
  meniuChangedhandler(menuName: string) {
    this.clickedmenuName = menuName;
  }
 

}
