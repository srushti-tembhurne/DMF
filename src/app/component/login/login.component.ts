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
    Res:any;
    details:any;
    visible:string;
    userDetails:any;
    constructor(
    private _fb:FormBuilder,
    private CS:CommonService,
    private DT:DataTransferService,
    private router:Router){
        
    }
  
    onlogin(model:loginModel){        
        alert(JSON.stringify(model));
        this.details=model;
        if(window.sessionStorage){
            window.sessionStorage.setItem('userObj',JSON.stringify(this.details));
        }
        /*this.CS.postService('http://172.17.163.56:3000/api/login',model).subscribe(
            data=>{this.Res=data;
            console.log(this.Res)
        },
            err=>{console.log(err)},
            ()=>{});*/           
       this.router.navigateByUrl('/home')
    }
    ngOnInit()
    {
        this.loginForm=this._fb.group({
            username:'',
            password:''
           // UserType:''
        })
       
          this.DT.emitChange({ visible:true ,userName:"Aasim"  });
        this.DT.isLoggedIn();   
              
    }
    ngOnDestroy()
    {
        this.DT.sendData(this.details);
        this.DT. isLoggedIn();
        const userName=this.details.username
        this.DT.emitChange({
            visible:false,
            userName:userName
        });
    }
}