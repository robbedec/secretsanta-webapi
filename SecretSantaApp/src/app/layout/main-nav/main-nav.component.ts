import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../user/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { GroupDataService } from '../../shared/services/group-data.service';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  loggedInUser$ = this._authenticationService.user$;
  user$ = this.userDataService.getCurrentUser$;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _authenticationService: AuthenticationService,
    private translate: TranslateService,
    private groupDataService: GroupDataService,
    private userDataService: UserDataService
  ) {}

  logout() {
    this._authenticationService.logout();
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

  leaveGroup() {
    this.groupDataService.leaveGroup().subscribe();
  }
}
