import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING,routComponents } from "./app.routing";

import { ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './service/auth.service';

import {CommonService} from './service/common.service';
import {DataTransferService} from './service/data-transfer.service'; 
import {Ng2PaginationModule} from 'ng2-pagination';
/*import {InMemoryWebApiModule} from '../../node_modules/angular2-in-memory-web-api';
import {InMemoryService} from './server/inMemoryService';*/


import { RouterModule } from '@angular/router';




@NgModule({
    declarations: [
        AppComponent,
        routComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,ReactiveFormsModule,
        HttpModule,Ng2PaginationModule,
        ClarityModule.forRoot(),
        ROUTING      
    ],
    providers: [AuthService,CommonService,DataTransferService],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}
