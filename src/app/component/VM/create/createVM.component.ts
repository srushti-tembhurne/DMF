import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from "@angular/forms";
import {Router} from '@angular/router';
import {createVMModel} from '../../../model/createVM.model';
import {DataTransferService} from '../../../service/data-transfer.service';
import {CommonService} from '../../../service/common.service';


@Component({
   // styleUrls: ['../app/styles.css'],
    templateUrl: './createVM.component.html'
})

export class CreateVMComponent {
    vmcreationForm:FormGroup;
    formdata:createVMModel;
    osList:string [];
    Res:any;
    
    constructor(private _fb:FormBuilder,private route:Router,private DT:DataTransferService,private CS:CommonService){
        this.vmcreationForm=this._fb.group({
            vmName:['',[Validators.required,Validators.minLength(3)]],
            OS:[''],
            diskSize:[''],
            cpuCore:['1'],            
            Memory:['']
        }); 
        this.osList=['Window 7','Window 8','Window 10','Ubuntu','CentOs','RedHat'];       
    }

    onSubmit(){
        let model=this.vmcreationForm.value;
        this.formdata= new createVMModel(model.vmName,model.OS,model.diskSize,model.cpuCore,model.memory);
        alert(JSON.stringify(this.formdata));
        this.CS.postService('http://172.17.163.56:3000/api/request',this.formdata).subscribe(
            data=>{this.Res=data;
            console.log(this.Res)
        },
            err=>{console.log(err);
            console.log(err)},
            ()=>{}); 


    }
    onCancel(){     
      this.route.navigateByUrl('/');       
   }
    ngOnInit(){
        /* this.CS.getService('http://172.17.163.56:3000/api/getOS').subscribe(
            data=>{this.osList=data},
            err=>{console.log(err)},
            ()=>{});*/
    //     this.DT.isLoggedIn();
             
    }
    ngOnDestroy(){
        
    }
    onlyNumberKey(event) {
    let charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;
    return true;
    }
}