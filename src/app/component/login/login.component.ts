import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from "@angular/forms";
import {loginModel} from '../../model/login.model';

@Component({
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginForm:FormGroup;
    constructor(private _fb:FormBuilder){}
  
    onlogin(model:loginModel){        
        alert(JSON.stringify(model));
    }
    ngOnInit()
    {
        this.loginForm=this._fb.group({
            username:'',
            password:'',
            UserType:''
        })
    }
}