/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component,EventEmitter,Output } from "@angular/core";
import {DataTransferService} from '../../service/data-transfer.service';


@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent {
  
  
    constructor( private DT:DataTransferService){
        
    }
    ngOnInit(){

            console.log(this.DT.recievData());            
             this.DT.emitChange({            
              visible:false
    });
    }    
}
