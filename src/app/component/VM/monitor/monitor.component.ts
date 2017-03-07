import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../../service/common.service';
@Component({
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent implements OnInit {
  MonitorList:any;
  constructor(/*private CS:CommonService*/) {
    /*this.CS.getService('').subscribe(
      data=>{this.MonitorList=data},
      err=>{console.log(err)},
      ()=>{ }
    );*/
   }

  ngOnInit() {
  }

}
