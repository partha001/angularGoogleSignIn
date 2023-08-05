import { Component, NgZone, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
//import * as google from 'google-one-tap';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private service:AuthService,
    private _ngZone: NgZone
  ) { }

  ngOnInit(): void {

    //@ts-ignore
    window.onGoogleLibraryLoad = () => {
      //@ts-ignore
      google.accounts.id.initialize({
        client_id: "591046592932-063cku33gm58lun2ppehd62583vrgpfu.apps.googleusercontent.com",
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      //@ts-ignore
      google.accounts.id.renderButton(
        //@ts-ignore
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", width: "100%" }
      );
      //@ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => { });
    };
  }

  // async handleCredentialResponse(response: CredentialResponse){
  //   await this.service.LoginWithGoogle(response.credential).subscribe(
  //     (x:any) => {
  //       localStorage.setItem("token",x.token);
  //       this._ngZone.run(()=>{
  //         this.router.navigate(["/loggedIn"]);
  //       })
  //     },
  //     (error:any)=>{
  //       debugger
  //       console.log(error);
  //     }
  //     );
  //   }  
  
  async handleCredentialResponse(response: CredentialResponse){
      console.log("capturing response",response);
    }     


}
