import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class DataTransferService {
  data:any;
  navFlag:boolean;
  constructor() {
    this.navFlag=false;
   }
  sendData(data:any)
  {
    this.data=data;
    console.log(this.data);
  }
  recievData()
  {
    return this.data;
  }
 // Observable string sources
    private emitChangeSource = new Subject<any>();
    // Observable string streams
    changeEmitted$ = this.emitChangeSource.asObservable();
    // Service message commands
    emitChange(change: any) {
        this.emitChangeSource.next(change);
    }
}
