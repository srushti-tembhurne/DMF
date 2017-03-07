import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

import { loginModel } from '../../model/login.model';
import { CommonService } from '../../service/common.service';
//import { DataTransferService } from '../../service/data-transfer.service';


import 'rxjs/Rx';

@Component({
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginForm: FormGroup;
    details: any;
    result: any;
    visible: string;
    InVisible: boolean;
    userDetails: any;
    userAgent: any;
    constructor(
        private _fb: FormBuilder,
        private CS: CommonService,
        /*private DT: DataTransferService,*/
        private router: Router) {
        this.userAgent = this.CS.getBrowserInfo();
        this.loginForm = this._fb.group({
            userId:'',
            password: '',
            userAgent: [this.userAgent, [Validators.required]]
        });
        this.CS.sendData({ visible: true });
        this.CS.isLoggedIn();


    }

    onlogin() {
        this.CS.postService('/api/v1/login', this.loginForm.value).subscribe(
            data => { this.loginResult(data); },
            err => { console.log(err) },
            () => { });
    }
    loginResult(data) {
        if (data.status) {
            debugger;
            let storage = window.sessionStorage;
            storage.setItem('token', data["data"].token);
            storage.setItem('expiry_in', (new Date(data["data"].expiry*1000).toLocaleString()));
            storage.setItem('username', this.loginForm.value["userId"]);
            this.InVisible = false;
            this.router.navigateByUrl('/home');
        } else if (!data.status) {
            this.result = data.result;
            this.InVisible = true;
        }

    }

}