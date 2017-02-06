import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from "@angular/forms";
import {Router} from '@angular/router';
import {createVMModel} from '../../../model/createVM.model';
import {DataTransferService} from '../../../service/data-transfer.service';


@Component({
   // styleUrls: ['../app/styles.css'],
    templateUrl: './createVM.component.html'
})
export class CreateVMComponent {
    vmcreationForm:FormGroup;
    formdata:createVMModel;
    
    constructor(private _fb:FormBuilder,private route:Router,private DT:DataTransferService){        
    }
    onSubmit(model:any){
        this.formdata= new createVMModel(model.vmName,{name:model.clusterName},{name:model.templateName},model.memory);
        alert(JSON.stringify(this.formdata));
    }
    onCancel(){     
      this.route.navigateByUrl('/');       
   }
    ngOnInit(){
        this.vmcreationForm=this._fb.group({
            vmName:['',[Validators.required,Validators.minLength(6)]],
            clusterName:'',
            templateName:'',
            memory:''
        });
         this.DT.isLoggedIn();
             
    }
    ngOnDestroy(){
        
    }
}