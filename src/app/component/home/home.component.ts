/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component,EventEmitter,Output } from "@angular/core";
import {DataTransferService} from '../../service/data-transfer.service';
import {Router} from '@angular/router';


@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    UserCommonObj:any;
  
    constructor(private route:Router, private DT:DataTransferService){
        
    }
    ngOnInit(){
            this.UserCommonObj=this.DT.recievData();
            this.DT.isLoggedIn();  
            this.DT.emitChange({ visible:false,UserName:"Aaseem" });
    }    
}
