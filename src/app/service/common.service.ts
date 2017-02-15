import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class CommonService {

  constructor(private http:Http) {
    
  }   
  postService(url:string,data:any)
  {
    if(url.indexOf('login')==-1)
    {
      let headers= new Headers();
      headers.append('x-access-token',window.sessionStorage.getItem('token'));
      headers.append('username',window.sessionStorage.getItem('username'));
      return this.http.post(url,data,{headers:headers}).map((res:Response)=>{return res.json();});
    }
    return this.http.post(url,data).map((res:Response)=>{return res.json();});
  }
  getService(url){
    let headers= new Headers();
     headers.append('token',"jshdflghsdlkfjgskldjfgskdjfgsdfgjsdfhkgjhsdfkljgnklsdjfvnsdkfjhgsdfgsdfgk");
     headers.append('username',window.sessionStorage.getItem('username'));
    return this.http.get(url,{headers:headers}).map((res:Response)=>{return res.json();});
  }
}
