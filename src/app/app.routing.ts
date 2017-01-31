/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { CreateVMComponent } from './component/createVM/createVM.component';
import { LoginComponent } from './component/login/login.component';
import {ForgotPasswordComponent} from './component/login/forgotpw.component';
import {AuthManager} from './authmanager';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'createVM', component: CreateVMComponent, canActivate: [AuthManager]},
    {path: 'login', component: LoginComponent},
    {path: 'login/forgotpw', component:ForgotPasswordComponent}
    
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
