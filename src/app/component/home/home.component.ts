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
    Requestdata: any;
    count: number;
    constructor(private route: Router, private DT: DataTransferService, private CS: CommonService, private AC: AppComponent) {

    }

    ngOnInit() {
        this.UserCommonObj = this.DT.recievData();
        this.DT.isLoggedIn();
        this.DT.sendData({ visible: false });
        this.CS.getService('/api/request').subscribe(
            data => {
                if (data.success) {
                    this.Requestdata = data;
                    this.Requestdata = Array.of(this.Requestdata);
                    this.Requestdata = this.Requestdata[0].result;
                    this.Requestdata = this.Requestdata.sort((a, b) => {
                        return (parseInt(a.id) - parseInt(b.id)) * -1;
                    });
                    this.count = this.Requestdata.length;

                } else {
                    this.AC.onlogout();
                }

            },
            err => { console.log(err) },
            () => { });
    }



}
