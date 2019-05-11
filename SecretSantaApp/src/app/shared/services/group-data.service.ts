import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Group } from '../../layout/dashboard/group.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupDataService {
  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  get currentUserGroup$(): Observable<Group> {
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
}
