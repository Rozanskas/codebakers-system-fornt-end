import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {

  private BASE_URL = "http://localhost:8081/api/admin";
    private COURSE_HOME_COMPONENT_URL = `${this.BASE_URL}/coursehomecomponent`;

  constructor(private http: HttpClient, private permissionsService: NgxPermissionsService) { }
  
  getCourseHomeComponent(courseId): Observable<any> {
    let params = new HttpParams().set("id",courseId); //Create new HttpParams
    return this.http.get(this.COURSE_HOME_COMPONENT_URL+"/?id="+courseId);
}
}
