import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-single-course-meniu',
  templateUrl: './single-course-meniu.component.html',
  styleUrls: ['./single-course-meniu.component.css']
})
export class SingleCourseMeniuComponent implements OnInit {

  @Output() meniuChanged: EventEmitter<string> = new EventEmitter();

  constructor(private permissionsService: NgxPermissionsService) { }

  ngOnInit() {
  }
  
clicked(name:string){
  this.meniuChanged.emit(name);
}


}
