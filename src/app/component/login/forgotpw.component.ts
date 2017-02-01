import { Component } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators} from "@angular/forms";
import {Forgotpw} from '../../model/forgotpw.model';

@Component({
    styleUrls: ['./login.component.scss'],
    templateUrl: './forgotpw.component.html'
})

export class ForgotPasswordComponent {
     forgotPwdfrm:FormGroup;
     Email:string;  
    constructor(private formBuilder:FormBuilder){}
    onlogin(model:Forgotpw){
        console.log(JSON.stringify(model));
    }
    ngOnInit()
    {
        this.forgotPwdfrm= this.formBuilder.group({
            Email:'Please Enter UR Email'
        });
    }

}
