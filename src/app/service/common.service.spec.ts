/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommonService } from './common.service';
import {Http} from '@angular/http';

describe('CommonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonService,Http]
    });
  });

  it('should ...', inject([CommonService], (service: CommonService) => {
    expect(service).toBeTruthy();
  }));
});
