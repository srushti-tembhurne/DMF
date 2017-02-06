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
    UserName:string="Users 1";
    constructor(private router: Router,private DT:DataTransferService) {       
         this.DT.changeEmitted$.subscribe(text=>{           
            this.visible=text.display;
            this.InVisible=text.visible;
            console.log(text.userName);
            this.UserName=text.userName || "Guest";            
            });       
    }
    ngOnInit()
    {
        this.InVisible=false;  
        this.UserName="User";    
    }
}
