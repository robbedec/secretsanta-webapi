import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from '../../layout/dashboard/group.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupDataService {

  constructor(private http: HttpClient) { }

  get currentUserGroup$(): Observable<Group> {
    return this.http.get(`${environment.apiUrl}/Group/CurrentUserGroup`).pipe(map(Group.fromJSON));
  }
}
