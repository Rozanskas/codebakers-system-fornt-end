import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http: HttpClient) { }

  register(username: string, password: string,name:string,email:string) {
    return this.http.post<any>(`http://localhost:8081/api/auth/signup`, { username, password ,name,email})
            .pipe(map(response => {
              return response;
               
            }));
  }
}
