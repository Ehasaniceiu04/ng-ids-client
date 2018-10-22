import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import { OAuthModule } from 'angular-oauth2-oidc';
import { OAuthService } from 'angular-oauth2-oidc';

import { Storage } from './storage.service';
import { environment } from '../../environments/environment';

declare var $: any;

@Injectable()
export class DemoAuthService {
  
  private _userClaims; 
  selectedOrganizationId:number = 0

  constructor(
    private auth: OAuthService, private storage: Storage) {        
        this.initialize();
  }

  initialize(){

    console.log("inside authService: setting up auth properties...");
    console.log(environment);
    this.auth.clientId = environment.IS4_CLIENT_ID;
    this.auth.scope = environment.IS4_SCOPE;
    this.auth.redirectUri = environment.IS4_REDIRECT_URL;
    this.auth.logoutUrl = environment.IS4_LOGOUT_URL;
    this.auth.oidc = true;
    this.auth.setStorage(localStorage);      

    this.auth.loadDiscoveryDocument(environment.IS4_DISCOVERY_URL).then(() => { 
        console.log("inside authService: about to call tryLogin()...");
        this.auth.tryLogin({
            onTokenReceived: context => {
              console.log("inside authService: onTokenReceived...");
              //
              // **** FOR DEBUG PURPOSE ONLY ****
              //
              console.log("logged in");
              console.log(context);

              var access_token = this.auth.getAccessToken();
                             
          }
        });  
    }, 
    (reason) => {
      console.log("error loading discovery document");
      console.log(reason);
    });
  }


  private extractData(res: Response) {    
    return res.json();
  }


  Login() {
    console.log("inside authService: about to call login()...");
    this.auth.initImplicitFlow();
  }

  Logout()
  {
    console.log("inside authService: about to call logout()...");
    //this.storage.clear();
    // localStorage.removeItem("UserClaims");
    this.auth.logOut();
  }

  public get AuthService() {        
        return this.auth; 
    }

  Authenticate() { 
    console.log("User is not logged in. Redirecting to authority..." + this.auth.getAccessToken()); 
    if(this.auth.getAccessToken() == null) {
      console.log('Authenticate access_token: ' + this.auth.getAccessToken());
      this.Login();
    }  
  }

//   setOrganization(orgId: number) {
//     let currentUserEmail = this.getCurrentUser();
//     this.storage.set(currentUserEmail + "OrgId", orgId);
//   }

//   getOrganization(): number {
//     let currentUserEmail = this.getCurrentUser();
//     return this.storage.get(currentUserEmail + "OrgId");
//   }

//   setCurrentUser(userEmail: string) {
//     this.storage.set("currentUserEmail", userEmail);
//   }

//   getCurrentUser(): string {
//     return this.storage.get("currentUserEmail");
//   }

}
