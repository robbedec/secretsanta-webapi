import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from '../../../shared/services/user-data.service';
import { Observable } from 'rxjs';
import { User } from '../user.model'
import { async } from 'q';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private _fetchUser$: Observable<User> = this._userDataService.getUser$(this.route.snapshot.params["username"]);
  constructor(private _userDataService: UserDataService, private route: ActivatedRoute) {
  }

  get user$(): Observable<User> {
    return this._fetchUser$;
  }

  ngOnInit() {

  }

}
