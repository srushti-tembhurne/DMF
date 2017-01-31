import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {createVMModel} from '../../model/createVM.model';

@Component({
   // styleUrls: ['../app/styles.css'],
    templateUrl: './createVM.component.html'
})
export class CreateVMComponent {
    vmcreationForm = new FormGroup({
        vmName: new FormControl(),
        clusterName: new FormControl(),
        templateName: new FormControl(),
        memory: new FormControl()
    });
    vmName:string;
    clusterName: string;
    templateName: string;
    memory: string;
    formdata:createVMModel;

    onSubmit(){
        this.formdata= new createVMModel(this.vmName,{name:this.clusterName},{name:this.templateName},this.memory);
        alert(JSON.stringify(this.formdata));
    }
}