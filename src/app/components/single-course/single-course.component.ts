import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/model/course';
import { Observable } from 'rxjs';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  clickedImagename: Observable<string>;
  @Input() course: Course;
  @Input() imageName: string;
  name: string;
  clickedmenuName:string;

  constructor(private courseComponent: CourseComponent) {
    this.clickedImagename = courseComponent.imageName();
    this.clickedImagename.subscribe(name => {
      this.name = "assets\/img\/" + name + ".png";
    });

  }

  ngOnInit() {
    this.name = "assets\/img\/" + this.imageName + ".png";
  }
  
  meniuChangedhandler(menuName: string) {
    this.clickedmenuName = menuName;
  }
 

}
