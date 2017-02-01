import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class CommonService {

  constructor(private http:Http) {}
  postService(url:string,data:any)
  {
    return this.http.post(url,data).map((res:Response)=>{return res.json();});
  }
  getService(url){
    return this.http.get(url).map((res:Response)=>{return res.json();});
  }
}
