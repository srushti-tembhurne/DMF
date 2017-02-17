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
import {Ng2PaginationModule} from 'ng2-pagination';


@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    UserCommonObj: any;
    Requestdata: any;
    count: number;
    constructor(private route: Router, private DT: DataTransferService, private CS: CommonService) {

    }

    ngOnInit() {
        this.UserCommonObj = this.DT.recievData();
        this.DT.isLoggedIn();
        this.DT.sendData({ visible: false });
        this.CS.getService('/api/request').subscribe(
            data => {
                this.Requestdata = data;
                console.log(this.Requestdata);
                this.Requestdata = Array.of(this.Requestdata);
                this.Requestdata = this.Requestdata[0].result;
                this.count=this.Requestdata.length;
            },
            err => { console.log(err) },
            () => { });
    }



}
