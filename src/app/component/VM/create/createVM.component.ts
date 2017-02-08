import { Component,Directive,ElementRef,HostListener} from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from "@angular/forms";
import {Router} from '@angular/router';
import {createVMModel} from '../../../model/createVM.model';
import {DataTransferService} from '../../../service/data-transfer.service';
import {CommonService} from '../../../service/common.service';


@Component({
   // styleUrls: ['../app/styles.css'],
    templateUrl: './createVM.component.html'
})
@Directive({
  selector: '[OnlyNumber]'
})

export class CreateVMComponent {
    vmcreationForm:FormGroup;
    formdata:createVMModel;
    osList:string [];
    Res:any;
    
    constructor(private _fb:FormBuilder,private route:Router,private DT:DataTransferService,private CS:CommonService,private el:ElementRef){
        this.vmcreationForm=this._fb.group({
            vmName:['',[Validators.required,Validators.minLength(3)]],
            OS:[''],
            diskSize:[''],
            cpuCore:['1'],            
            Memory:['']
        }); 
        this.osList=['Window 7','Window 8','Window 10','Ubuntu','CentOs','RedHat'];       
    }
    @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (e.keyCode == 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.keyCode == 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
     }

    onSubmit(){
        let model=this.vmcreationForm.value;
        this.formdata= new createVMModel(model.vmName,model.OS,model.diskSize,model.cpuCore,model.memory);
        alert(JSON.stringify(this.formdata));
      /*  this.CS.postService('http://172.17.163.56:3000/api/request',this.formdata).subscribe(
            data=>{this.Res=data;
            console.log(this.Res)
        },
            err=>{console.log(err)},
            ()=>{}); */


    }
    onCancel(){     
      this.route.navigateByUrl('/');       
   }
    ngOnInit(){
        /* this.CS.getService('http://172.17.163.56:3000/api/getOS').subscribe(
            data=>{this.osList=data},
            err=>{console.log(err)},
            ()=>{});*/
         this.DT.isLoggedIn();
             
    }
    ngOnDestroy(){
        
    }
}