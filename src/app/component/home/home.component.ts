/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, EventEmitter, Output } from "@angular/core";
import { DataTransferService } from '../../service/data-transfer.service';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service';
import { RequestList, DataArray, ResultArray } from '../../model/requestlist.model';
import { Ng2PaginationModule } from 'ng2-pagination';
import { AppComponent } from '../../app.component';


@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    UserCommonObj: any;
    Requestdata=[];
    count: number;
    refresh_time:Date;
    constructor(private route: Router, private DT: DataTransferService, private CS: CommonService, private AC: AppComponent) {

    }

    ngOnInit() {
        this.UserCommonObj = this.DT.recievData();
        this.DT.isLoggedIn();
        this.DT.sendData({ visible: false });
            this.onRefresh();
    }

    onRefresh(){
        this.CS.getService('/api/v1/request').subscribe(
            data => {
                let str= new String(data.msg);
                let  success:boolean=data.success;    
                let DataArray:any;
                let paramArray={}; 
                let final=[];            
                            
                if (data.status) {
                   /*
                    this.count = this.Requestdata.length;*/
                    this.refresh_time = new Date();
                    this.Requestdata=[];
                    DataArray=data.data;
                    console.log(DataArray.length);
                    for(let i=0;i<DataArray.length;i++)
                    {
                        let props="parameter_"+i;
                        paramArray[props]=DataArray[i].parameters;
                        let tempObj={};
                        for(let j=0;j< paramArray[props].length;j++)
                        {
                           tempObj[paramArray[props][j].name]=paramArray[props][j].value;
                        }
                        tempObj["id"]=i+1;
                        this.Requestdata.push(tempObj);
                    }
                  

                } else if(!status && (str.includes("Failed to authenticate token")||str.includes("no token found"))/*(str.indexOf("Failed to authenticate token")>-1||str.indexOf("no token found"))*/)
                {
                    this.AC.onlogout();
                }

            },
            err => { console.log(err) },
            () => { });
    }



}
