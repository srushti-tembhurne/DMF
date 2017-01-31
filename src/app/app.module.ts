import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./component/home/home.component";
import { AboutComponent } from "./component/about/about.component";
import { CreateVMComponent } from "./component/createVM/createVM.component";
import { LoginComponent } from "./component/login/login.component";
import { ForgotPasswordComponent } from './component/login/forgotpw.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './service/auth.service';

import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        CreateVMComponent,
        LoginComponent,ForgotPasswordComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,ReactiveFormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}
