import { Component } from '@angular/core';
import { SocialAuthService, GoogleSigninButtonModule, SocialUser} from "@abacritt/angularx-social-login";
// import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
// import { SocialUser } from "@abacritt/angularx-social-login";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: SocialAuthService) { }
  user:any;
  loggedIn:any;


  title = 'testapp';

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }

}
