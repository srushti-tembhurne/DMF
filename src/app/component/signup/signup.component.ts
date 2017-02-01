import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from "@angular/forms";
import {Router} from '@angular/router';
import {signupModel} from '../../model/signup.model';
import {CommonService} from '../../service/common.service';
import 'rxjs/Rx';

@Component({
   // styleUrls: ['./login.component.scss'],
    templateUrl: './signup.component.html'
})

export class SignupComponent{
    signupForm:FormGroup;
    formdata:signupModel; 
    Res:any;
    constructor(private _fb:FormBuilder,public router:Router,private CS:CommonService){
        
    }
    onSubmit(model:any){
        this.formdata=new signupModel(model.username,model.email,model.password);
        alert(JSON.stringify(this.formdata));
        this.CS.postService('http://172.17.163.56:3000/signup',this.formdata).subscribe(
            data=>{this.Res=data},
            err=>{console.log(err)},
            ()=>{});
    }
    onCancel(){
        console.log("Bye !!!");
        this.router.navigateByUrl('/');
    }
    ngOnInit(){
        this.signupForm=this._fb.group({
            email:['',[Validators.required]],
            username:['',[Validators.required]],
            password:['',[Validators.required]]
        });
    }
}
