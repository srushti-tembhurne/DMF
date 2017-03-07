/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ClarityModule } from 'clarity-angular';
import { LoginComponent } from './login.component';
import {CommonService} from '../../service/common.service';
//import {DataTransferService} from '../../service/data-transfer.service';
import{AppModule} from '../../app.module';



describe('LoginComponent', () => {   

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoginComponent
            ],
            imports: [
                ClarityModule.forRoot(),
                AppModule,
            ],
             providers:[CommonService]
        });

        fixture = TestBed.createComponent(LoginComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;

    });

    afterEach(() => {
        fixture.destroy();
    });

    /*it('should create the login page', async(() => {
        expect(compiled).toBeTruthy();
}));*/
});
