import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//import { DataTransferService } from './service/data-transfer.service';
import { CommonService } from './service/common.service';
import {CreateVMComponent} from './component/VM/create/createVM.component'

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
    modelMsg: any;
   // @ViewChild(CreateVMComponent) VMC:CreateVMComponent;
    constructor(private router: Router, /*private DT: DataTransferService,*/ private CS: CommonService) {
        /*this.DT.changeEmitted$.subscribe(text => {
            this.InVisible = text.visible;
        });*/
        this.router.events.subscribe(data => {
            this.UserName = window.sessionStorage.getItem('username') || "User";
            let visibleFlag = this.CS.recievData() || false;
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
       
        this.CS.deleteService('/api/v1/login').subscribe(
            data => {
                if (data.status) {
                    console.log(data);
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
        //this.VMC.redirectToHome()
        this.open = false; // for create VM component
        this.router.navigateByUrl('/');
    }
}
