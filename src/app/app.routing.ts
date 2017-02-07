/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { CreateVMComponent } from './component/VM/create/createVM.component';
import { LoginComponent } from './component/login/login.component';
import {ForgotPasswordComponent} from './component/forgotpw/forgotpw.component';
import {PageNotFound} from './component/underConstruction/Notfound.component';
import {AuthManager} from './authmanager';
import {SignupComponent} from './component/signup/signup.component';
import {UnderConstruction}from './component/underConstruction/underConstruction.component';
import {MonitorComponent} from './component/VM/monitor/monitor.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'createVM', component: CreateVMComponent},
    {path: 'login', component: LoginComponent},
    {path: 'monitor', component: MonitorComponent},
    {path: 'login/forgotpw', component:ForgotPasswordComponent},
    {path: 'login/signup', component:SignupComponent},
    {path:'**' ,component:PageNotFound,pathMatch:'full'}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
export const routComponents=[AboutComponent,HomeComponent,CreateVMComponent,LoginComponent,ForgotPasswordComponent,PageNotFound,SignupComponent,UnderConstruction,MonitorComponent];
