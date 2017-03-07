import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { DataTransferService } from '../../../service/data-transfer.service';
import { CommonService } from '../../../service/common.service';
import { AppComponent } from '../../../app.component';


@Component({
    // styleUrls: ['../app/styles.css'],
    templateUrl: './createVM.component.html'
})

export class CreateVMComponent {
    vmcreationForm: FormGroup;
    formdata: any;
    osList: any[];
    Res: any;
    cancelFlag: boolean = true;

    constructor(private _fb: FormBuilder, private router: Router, private DT: DataTransferService, private CS: CommonService, private AC: AppComponent) {
        this.osList = [{ name: 'Ubuntu 8', version: 'ubuntu-8.04-desktop-amd64.iso' },
        { name: 'Ubuntu 14', version: 'ubuntu-14.04.1-server-amd64.iso' },
        { name: 'CentOS 7', version: 'CentOS-7-x86_64-Minimal-1611.iso' },
        { name: 'Windows Server 64bit', version: '8250.0WIN8_X64_SERVER.ISO' }];
        this.vmcreationForm = this._fb.group({
            Name:['',[Validators.required]],
            description:['',[Validators.required,Validators.minLength(3)]],
            type:['VM',[Validators.required ,Validators.minLength(2)]],
            operation:['CREATE',[Validators.required]],
            vmName: ['', [Validators.required, Validators.minLength(3)]],
            OS: [this.osList[0].name, [Validators.required]],
            diskSize: ['', [Validators.required]],
            cpuCore: ['1', [Validators.required]],
            Memory: ['', [Validators.required]],
            
        });
    }

    onSubmit() {
        let model = this.vmcreationForm.value;
        this.formdata = {
            "name": model.Name,
            "description": model.description,
            "type": model.type,
            "operation": model.operation,
            "parameters": [
                {
                    "name": "vmName",
                    "value": model.vmName,
                    "type": "STRING"
                },
                {
                    "name": "cores",
                    "value": model.cpuCore,
                    "type": "NUMBER"
                },
                {
                    "name": "memory",
                    "value": model.Memory,
                    "type": "NUMBER"
                },
                {
                    "name": "storage",
                    "value": model.diskSize,
                    "type": "NUMBER"
                },
                {
                    "name": "os",
                    "value": model.OS,
                    "type": "STRING"
                }

            ]
        }       
        this.CS.postService('/api/v1/request', this.formdata).subscribe(
            data => {
                let str = new String(data.message);
                this.Res = data;
                if (this.Res.success) {
                    this.vmcreationForm.reset({ type: 'CREATE' });
                } else if (str.indexOf("Failed to authenticate token") > -1) {
                    //this.AC.onlogout();
                    this.cancelFlag = false;
                } else if (!this.Res.success) {
                    this.cancelFlag = true;
                    console.log("this");
                }
                this.AC.open = true;
                this.AC.modelMsg = this.Res.result || str;
                this.DT.emitChange(this.cancelFlag);
            },
            err => {
                console.log(err);
            },
            () => { });


    }
    redirectToHome() {
        this.AC.open = false;
        if (this.cancelFlag) {
            console.log(this.Res.result);
            if (this.Res.result == "Request saved") {
                this.AC.onCancel();
            } else {
                console.log("Error in Form");
            }

        } else {
            this.AC.onlogout();
        }
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