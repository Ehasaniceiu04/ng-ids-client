import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { DemoAuthService } from './services/demoatuh.service';
import { Storage } from './services/storage.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [OAuthModule,DemoAuthService,Storage],
  bootstrap: [AppComponent]
})
export class AppModule { }
