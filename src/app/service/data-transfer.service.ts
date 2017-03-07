import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class DataTransferService {
  data: any;
  navFlag: boolean;
  userToken: any;

  constructor(private router: Router) {
    this.navFlag = false;
  }

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
  //function used to send data from one component to anoher
  sendData(data: any) { this.data = data; }
  //function used to recieve data wich was sent by sendData method
  recievData() { return this.data; }
  //Method used to check the user is loggedin or not and redirect respectivley 
  isLoggedIn() {
    const pathName: string = window.location.pathname;
    debugger;
    if (window.sessionStorage) {
      this.userToken = window.sessionStorage.getItem('token');

      if (this.userToken == "undefined" || !this.userToken) {
        this.router.navigateByUrl('/login');
      } else {
        if (pathName.indexOf('login') > -1) {
           this.router.navigateByUrl('/home'); 
          //this.router.navigateByUrl(pathName);
        } else {
           this.router.navigateByUrl(pathName);
          //this.router.navigateByUrl('/home');
        }

      }
    }
  }
}
