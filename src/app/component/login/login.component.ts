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
        this.DT.sendData({ visible:true });
        this.DT.isLoggedIn();  
        
    }
  
<<<<<<< .mine    onlogin(model:loginModel){                              
        this.CS.postService('http://172.17.163.56:3002/api/login',this.loginForm.value).subscribe(
            data=>{this.loginResult(data);},
=======    onlogin(model:loginModel){        
     //   alert(JSON.stringify(this.loginForm.valueChanges));
        this.details=this.loginForm.value;
        if(window.sessionStorage){
            window.sessionStorage.setItem('userObj',JSON.stringify(this.details));
        }
        this.CS.postService('http://172.17.163.56:3002/api/login',model).subscribe(
            data=>{
            console.log(data);
            if(data.test=='failure'){
                this.result=data.result;
                console.log(data.result);
                this.InVisible=true;
            }
        },
>>>>>>> .theirs            err=>{console.log(err)},
<<<<<<< .mine            ()=>{}); 
=======            ()=>{});          
     //  this.router.navigateByUrl('/home')
>>>>>>> .theirs    }
    loginResult(data)
    {
<<<<<<< .mine        if(data.test=="success")
            {                
                let storage=window.sessionStorage;
                storage.setItem('token',data.token);
                storage.setItem('expiry_in',data.expiry_in);
                storage.setItem('username',data.username);
                this.router.navigateByUrl('/home');
            }else{
                console.log(data);
            }
=======       this.InVisible=false;
>>>>>>> .theirs    }
   
}