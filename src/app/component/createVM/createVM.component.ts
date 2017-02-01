import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from "@angular/forms";
import {Router} from '@angular/router';
import {createVMModel} from '../../model/createVM.model';

@Component({
   // styleUrls: ['../app/styles.css'],
    templateUrl: './createVM.component.html'
})
export class CreateVMComponent {
    vmcreationForm:FormGroup;
    formdata:createVMModel;
    //parentRouter:any;
    constructor(private _fb:FormBuilder,public router:Router){
        //this.parentRouter=Router;
    }
    onSubmit(model:any){
        this.formdata= new createVMModel(model.vmName,{name:model.clusterName},{name:model.templateName},model.memory);
        alert(JSON.stringify(this.formdata));
    }
    onCancel(){
        console.log("Bye !!!");
        this.router.navigateByUrl('/');
    }
    ngOnInit(){
        this.vmcreationForm=this._fb.group({
            vmName:['',[Validators.required,Validators.minLength(6)]],
            clusterName:'',
            templateName:'',
            memory:''
        });
    }
}