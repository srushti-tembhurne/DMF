import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from './service/data-transfer.service';
import { CommonService } from './service/common.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

})
export class AppComponent {
    visible: string;
    InVisible: boolean;
    UserName: string;
    showNav: boolean = true;
    open: boolean = false;
    modelMsg: string;
    constructor(private router: Router, private DT: DataTransferService, private CS: CommonService) {
        this.DT.changeEmitted$.subscribe(text => {
            this.InVisible = text.visible;
        });
        this.router.events.subscribe(data => {
            this.UserName = window.sessionStorage.getItem('username') || "User";
            let visibleFlag = this.DT.recievData() || false;
            (visibleFlag !== false) ? this.InVisible = visibleFlag.visible : this.InVisible = visibleFlag;
        });
    }
    ngOnInit() {
        this.InVisible = false;
    }
    toggleClass() {
        this.showNav = !this.showNav;
    }
    onlogout() {
        /*  let storage=window.sessionStorage;
          storage.setItem('token','');
          storage.setItem('expiry_in','');
          storage.setItem('username','');
          this.router.navigateByUrl('/login');*/
        this.CS.getService('/api/logout').subscribe(
            data => {
                if (data.success) {
                    let storage = window.sessionStorage;
                    storage.setItem('token', '');
                    storage.setItem('expiry_in', '');
                    storage.setItem('username', '');
                    this.router.navigateByUrl('/login');

                }

            },
            err => { console.log(err) },
            () => { });
    }
    onCancel() {
        this.open = false; // for create VM component
        this.router.navigateByUrl('/');
    }
    /*  onResize(event) { 
          if(event.target.innerWidth<576){
              console.log("Change the title");
          
              
          }
      }*/
}
