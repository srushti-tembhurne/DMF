import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Router} from '@angular/router';

@Injectable()
export class DataTransferService {
  data:any;
  navFlag:boolean;
  userDetails:any;

  constructor(private router:Router) {
    this.navFlag=false;
   }
 
 // Observable string sources
    private emitChangeSource = new Subject<any>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    // Service message commands
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }
     sendData(data:any)  {
    this.data=data;   
  }
  recievData()  {  
      return this.data;
  }
    isLoggedIn()
    {     
      const pathName:string=window.location.pathname;
      if(window.sessionStorage){
                this.userDetails=window.sessionStorage.getItem('username');
            }   
            if(!this.userDetails )   
            {
                this.router.navigateByUrl('/login');
            }else{
              if(pathName.indexOf('login')>-1)
              {
                this.router.navigateByUrl('/home');
              }else{
                this.router.navigateByUrl(pathName);
              }
              
            }
    }
}
