import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Observable } from 'rxjs';
import { User } from '../user.model'
import { async } from 'q';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private _fetchUser$: Observable<User> = this._userDataService.getUser$("robbedec");
  constructor(private _userDataService: UserDataService) {
    //this._fetchUser$ = this._userDataService.getUser$("robbedec");
  }

  get user$(): Observable<User> {
    return this._fetchUser$;
  }

  ngOnInit() {

  }

}
