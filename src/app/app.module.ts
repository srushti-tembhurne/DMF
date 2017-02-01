import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./component/home/home.component";
import { AboutComponent } from "./component/about/about.component";
import { CreateVMComponent } from "./component/VM/create/createVM.component";
import { LoginComponent } from "./component/login/login.component";
import { ForgotPasswordComponent } from './component/forgotpw/forgotpw.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './service/auth.service';
import {PageNotFound} from './component/underConstruction/Notfound.component';
import {UnderConstruction}from './component/underConstruction/underConstruction.component';
import { SignupComponent } from './component/signup/signup.component';
import {CommonService} from './service/common.service';

import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        CreateVMComponent,
         LoginComponent,ForgotPasswordComponent,SignupComponent,PageNotFound,UnderConstruction
    ],
    imports: [
        BrowserModule,
        FormsModule,ReactiveFormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [AuthService,CommonService],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}
