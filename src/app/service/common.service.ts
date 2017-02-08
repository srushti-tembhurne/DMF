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
      console.log("without login")
      let headers= new Headers();
      headers.append('x-access-token',window.sessionStorage.getItem('token'));
      return this.http.post(url,data,{headers:headers}).map((res:Response)=>{return res.json();});
    }
    return this.http.post(url,data).map((res:Response)=>{return res.json();});
  }
  getService(url){
    let headers= new Headers();
     headers.append('token',"jshdflghsdlkfjgskldjfgskdjfgsdfgjsdfhkgjhsdfkljgnklsdjfvnsdkfjhgsdfgsdfgk");
    return this.http.get(url,{headers:headers}).map((res:Response)=>{return res.json();});
  }
}
