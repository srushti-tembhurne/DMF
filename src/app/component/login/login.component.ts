import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from "@angular/forms";
import {loginModel} from '../../model/login.model';
import {CommonService} from '../../service/common.service';
import 'rxjs/Rx';

@Component({
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginForm:FormGroup;
    Res:any;
    constructor(private _fb:FormBuilder,private CS:CommonService){}
  
    onlogin(model:loginModel){        
        alert(JSON.stringify(model));
         this.CS.postService('http://172.17.163.56:3000/login',model).subscribe(
            data=>{this.Res=data},
            err=>{console.log(err)},
            ()=>{});
    }
    ngOnInit()
    {
        this.loginForm=this._fb.group({
            username:'',
            password:''
           // UserType:''
        })
    }
}