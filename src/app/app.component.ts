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
    constructor(private router: Router,private DT:DataTransferService) {
        //this.navFlag=false; 
         this.DT.changeEmitted$.subscribe(text=>{
            console.log(text);
            this.visible=text;
            });       
    }
    ngOnInit()
    {
        this.visible="none";       
    }
}
