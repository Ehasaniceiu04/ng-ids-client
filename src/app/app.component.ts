import { Component } from '@angular/core';
import { DemoAuthService } from './services/demoatuh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private demoAuth: DemoAuthService)
  {

  }
  ngOnInit() { 
    if (this.demoAuth.AuthService.getAccessToken()===null) {
      this.demoAuth.Authenticate();
    } 

}
  title = 'app';
}
