import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { createVMModel } from '../../../model/createVM.model';
import { DataTransferService } from '../../../service/data-transfer.service';
import { CommonService } from '../../../service/common.service';
import { AppComponent } from '../../../app.component';


@Component({
    // styleUrls: ['../app/styles.css'],
    templateUrl: './createVM.component.html'
})

export class CreateVMComponent {
    vmcreationForm: FormGroup;
    formdata: createVMModel;
    osList: any[];
    Res: any;

    constructor(private _fb: FormBuilder, private router: Router, private DT: DataTransferService, private CS: CommonService, private AC: AppComponent) {
        this.osList = [{ name: 'Ubuntu 8', version: 'ubuntu-8.04-desktop-amd64.iso' },
        { name: 'Ubuntu 14', version: 'ubuntu-14.04.1-server-amd64.iso' },
        { name: 'CentOS 7', version: 'CentOS-7-x86_64-Minimal-1611.iso' },
        { name: 'Windows Server 64bit', version: '8250.0WIN8_X64_SERVER.ISO' }];
        this.vmcreationForm = this._fb.group({
            vmName: ['', [Validators.required, Validators.minLength(3)]],
            OS: ['', [Validators.required]],
            diskSize: ['', [Validators.required]],
            cpuCore: ['1', [Validators.required]],
            Memory: ['', [Validators.required]],
            type: 'create-vm'
        });      
    }

    onSubmit() {
        let model = this.vmcreationForm.value;
        this.formdata = new createVMModel(model.vmName, model.OS, model.diskSize, model.cpuCore, model.Memory, model.type);
        this.CS.postService('/api/request', this.formdata).subscribe(
            data => {
                this.Res = data;
                this.AC.open = true;
                this.AC.modelMsg = this.Res.result;
                if (this.Res.success) {
                    this.vmcreationForm.reset({ type: 'create-vm' });
                }
            },
            err => {
                console.log(err);
            },
            () => { });


    }
    redirectToHome() {       
       this.AC.onCancel();
    }
    ngOnInit() {
        /* this.CS.getService('/api/getOS').subscribe(
            data=>{this.osList=data},
            err=>{console.log(err)},
            ()=>{});*/
        //     this.DT.isLoggedIn();

    }
    ngOnDestroy() {

    }
    onlyNumberKey(event) {
        let charCode = (event.which) ? event.which : event.keyCode;
        if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
}