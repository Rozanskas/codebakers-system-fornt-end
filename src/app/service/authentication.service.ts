import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { NavigatorComponent } from '../components/navigator/navigator.component';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private permissionsService: NgxPermissionsService) { }

  login(usernameOrEmail: string, password: string) {
    return this.http.post<any>(`http://localhost:8081/api/auth/signin`, { usernameOrEmail, password })
      .pipe(map(user => {

        // login successful if there's a jwt token in the response
        if (user.accessToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          let jwtData = user.accessToken.split('.')[1]
          let decodedJwtJsonData = window.atob(jwtData)
          let decodedJwtData = JSON.parse(decodedJwtJsonData)

          let role = decodedJwtData.authorities[0].authority;
          let roles: string[] = [];
          roles.push(role);

          this.permissionsService.loadPermissions(roles);
          this.isLoginSubject.next(true);

        }

        return user;
      }));
  }

  logout(): void {
    
    this.http.post(`http://localhost:8081/logout`,{}).subscribe();
    localStorage.removeItem('currentUser');
    this.isLoginSubject.next(false);
    this.permissionsService.flushPermissions();

  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}