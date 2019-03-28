import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-course-image',
  templateUrl: './single-course-image.component.html',
  styleUrls: ['./single-course-image.component.css']
})
export class SingleCourseImageComponent implements OnInit {


  @Input() imageName: string;
  name: string;

  constructor() { }

  ngOnInit() {
    this.name = "assets\/img\/" + this.imageName + ".png";
  }

}
