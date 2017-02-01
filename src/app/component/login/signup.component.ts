import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from "@angular/forms";
import {Router} from '@angular/router';
import {signupModel} from '../../model/signup.model';

@Component({
    styleUrls: ['./login.component.scss'],
    templateUrl: './signup.component.html'
})

export class SignupComponent{
    signupForm:FormGroup;
    formdata:signupModel;
   // parentRouter:any;
    constructor(private _fb:FormBuilder,public router:Router){
      //  this.parentRouter=Router;
    }
    onSubmit(model:any){
        this.formdata=new signupModel(model.email,model.username,model.password);
        alert(JSON.stringify(this.formdata));
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
