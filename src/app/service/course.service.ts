import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
private BASE_URL = "http://localhost:8081";
private ALL_COURSES_URL = `${this.BASE_URL}/courses`;

  constructor(private http: HttpClient) { }

   getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.ALL_COURSES_URL);
  }
}
