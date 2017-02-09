import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataTransferService} from './service/data-transfer.service';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
    visible:string;
    InVisible:boolean;
    UserName:string;
    constructor(private router: Router,private DT:DataTransferService) {       
         this.DT.changeEmitted$.subscribe(text=>{           
            this.InVisible=text.visible;                      
        }); 
        this.router.events.subscribe(data=>{
            console.log("RouteChange event");
            console.log(data);
            this.UserName=window.sessionStorage.getItem('username') || "User";
            let visibleFlag=this.DT.recievData()||false;
            (visibleFlag !== false)?this.InVisible=visibleFlag.visible :this.InVisible=visibleFlag;
            console.log(this.InVisible);
        });      
    }
    ngOnInit()
    {
        this.InVisible=false;  
        this.UserName= "User";    
    }
    onlogout(){
        let storage=window.sessionStorage;
        storage.setItem('token','');
        storage.setItem('expiry_in','');
        storage.setItem('username','');
        this.router.navigateByUrl('/login');
    }
}
