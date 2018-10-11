import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // givess us access token and refresh token
  constructor() {
    const params = this.getHashParams();
  }

   getHashParams() {
    const hashParams = {};
    // tslint:disable-next-line:prefer-const
    let e, r = /([^&;=]+)=?([^&;]*)/g,
        // tslint:disable-next-line:prefer-const
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

}
