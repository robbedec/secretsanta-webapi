import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../profile/user.model'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getUser$(username: string): Observable<User>{
    return this.http.get(`${environment.apiUrl}/users/${username}`).pipe(map(User.fromJSON));
  } 
}
