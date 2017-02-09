import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from "@angular/forms";
import {Router} from '@angular/router';

import {loginModel} from '../../model/login.model';
import {CommonService} from '../../service/common.service';
import {DataTransferService} from '../../service/data-transfer.service';


import 'rxjs/Rx';

@Component({
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginForm:FormGroup;
    details:any;
    result:any;
    visible:string;
    InVisible:boolean;
    userDetails:any;
    constructor(
    private _fb:FormBuilder,
    private CS:CommonService,
    private DT:DataTransferService,
    private router:Router){
         this.loginForm=this._fb.group({
            email:'',
            password:''
           // UserType:''
        })       
        //this.DT.emitChange({ visible:true });
        console.log("Started ")
        this.DT.sendData({ visible:false });
        this.DT.isLoggedIn();  
        
    }
  
    onlogin(model:loginModel){                              
        this.CS.postService('http://172.17.163.56:3002/api/login',this.loginForm.value).subscribe(
            data=>{this.loginResult(data);},  
           err=>{console.log(err)},
            ()=>{});            
     //  this.router.navigateByUrl('/home')
    }
    loginResult(data)
    {
        console.log(data);
        if(data.success)
            {                
                let storage=window.sessionStorage;
                storage.setItem('token',data.token);
                storage.setItem('expiry_in',data.expiry_in);
                storage.setItem('username',data.username);
                this.InVisible=false;
                this.router.navigateByUrl('/home');
            }else if(!data.success){
                this.result=data.result;
                console.log(data.result);
                this.InVisible=true;
            }
       
    }
   
}