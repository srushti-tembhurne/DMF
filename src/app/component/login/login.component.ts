import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {loginModel} from '../../model/login.model';
import {AuthService} from '../../service/auth.service';
import {Http} from '@angular/http';
import {AuthManager} from '../../authmanager';


@Component({
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})
export class LoginComponent{
    
    loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });
    constructor(private auth: AuthService){}
    /*ngOnInit(){

    }*/

    onlogin(data){
        console.log(data);
        alert(JSON.stringify(data));
        this.auth.authenticateNow(data);
        alert('after');
    }
}