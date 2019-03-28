import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

    private BASE_URL = "http://localhost:8081";
    private ALL_USERS_URL = `${this.BASE_URL}/users`;
    private ENABLE_USER = `${this.BASE_URL}/enableuser`;
    private DISABLE_USER = `${this.BASE_URL}/disableuser`;

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.ALL_USERS_URL);
    }

    enableUser(id: number): any {
        return this.http.post(this.ENABLE_USER, id);
    }

    disableUser(id: number): any {
        return this.http.post(this.DISABLE_USER, id);
    }
}