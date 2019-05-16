import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Group } from '../../shared/models/group.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupDataService {
  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  get currentUserGroup$(): Observable<Group> {
    this.http
      .get(`${environment.apiUrl}/Groups/CurrentUserGroup`, {
        observe: 'response'
      })
      .subscribe(response => {
        if (response.status === 204) {
          return Group.fromJSON(0);
        }
      });
    return this.http
      .get(`${environment.apiUrl}/Groups/CurrentUserGroup`)
      .pipe(map(Group.fromJSON));
  }

  get groups$(): Observable<Group[]> {
    return this.http.get(`${environment.apiUrl}/Groups`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }),
      map((list: any[]): Group[] => list.map(Group.fromJSON))
    );
  }

  leaveGroup() {
    return this.http
      .post(`${environment.apiUrl}/groups/leavegroup`, null)
      .pipe();
  }

  joinGroup(groupId: number) {
    return this.http
      .post(`${environment.apiUrl}/groups/joingroup/${groupId}`, null)
      .pipe();
  }

  addGroup(group: Group) {
    console.log(group.toJSON());
    return this.http
      .post(`${environment.apiUrl}/groups/create`, group.toJSON())
      .pipe();
  }
}
