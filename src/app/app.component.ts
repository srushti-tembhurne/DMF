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
    showNav:boolean = true;
    constructor(private router: Router,private DT:DataTransferService) {       
         this.DT.changeEmitted$.subscribe(text=>{           
            this.InVisible=text.visible;                      
        }); 
        this.router.events.subscribe(data=>{
            this.UserName=window.sessionStorage.getItem('username') || "User";
            let visibleFlag=this.DT.recievData()||false;
            (visibleFlag !== false)?this.InVisible=visibleFlag.visible :this.InVisible=visibleFlag;
        });      
    }
    ngOnInit()
    {
        this.InVisible=false;  
        this.UserName= "User";    
    }
    toggleClass(){
        this.showNav = !this.showNav;
    }
    onlogout(){
        let storage=window.sessionStorage;
        storage.setItem('token','');
        storage.setItem('expiry_in','');
        storage.setItem('username','');
        this.router.navigateByUrl('/login');
    }
}
