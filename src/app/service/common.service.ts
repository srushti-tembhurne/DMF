import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class CommonService {
  baseUrl: string = "http://localhost:3000";
  constructor(private http: Http) {
  }
  postService(url: string, data: any) {
    if (url.indexOf('login') == -1) {
      let headers = new Headers();     
      headers.append('x-access-token', window.sessionStorage.getItem('token'));
      headers.append('username', window.sessionStorage.getItem('username'));
      return this.http.post(this.baseUrl + url, data, { headers: headers }).map((res: Response) => { return res.json(); });
    }
    return this.http.post(this.baseUrl + url, data).map((res: Response) => { return res.json(); });
  }
  getService(url) {
    let headers = new Headers();
    headers.append('content-type', 'application/x-www-form-urlencoded');
    headers.append('x-access-token', window.sessionStorage.getItem('token'));
    headers.append('username', window.sessionStorage.getItem('username'));
    return this.http.get(this.baseUrl + url, { headers: headers }).map((res: Response) => { return res.json(); });
  }
  getBrowserInfo() {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // In Opera 15+, the true version is after "OPR/" 
    if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
      browserName = "Opera";
      fullVersion = nAgt.substring(verOffset + 4);
    }
    // In older Opera, the true version is after "Opera" or after "Version"
    else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
      browserName = "Opera";
      fullVersion = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
      browserName = "Microsoft Internet Explorer";
      fullVersion = nAgt.substring(verOffset + 5);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
      browserName = "Chrome";
      fullVersion = nAgt.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
      browserName = "Safari";
      fullVersion = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
      browserName = "Firefox";
      fullVersion = nAgt.substring(verOffset + 8);
    }
    // In most other browsers, "name/version" is at the end of userAgent 
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
      (verOffset = nAgt.lastIndexOf('/'))) {
      browserName = nAgt.substring(nameOffset, verOffset);
      fullVersion = nAgt.substring(verOffset + 1);
      if (browserName.toLowerCase() == browserName.toUpperCase()) {
        browserName = navigator.appName;
      }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
      fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
      fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
      fullVersion = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    }    
    return {
      'browserName': browserName,
      'fullVersion': fullVersion,
      'majorVersion': majorVersion,
      'appName': navigator.appName,
      'userAgent': navigator.userAgent
    }
  }

  //Not Included Yet 
  tokenExpiryCheck() {
    let expiry = new Date(window.sessionStorage.getItem('expiry_in'));
  
    if (expiry && this.compareDates(expiry)) {    
      return false; //token is not expired
    }
    return true; // token has been expired 
  }
  compareDates(expiry: Date) {
    let created = new Date();
    if ((expiry.getFullYear() >= created.getFullYear()) && (expiry.getMonth() >= created.getMonth()) && (expiry.getDay() >= created.getDay())) {      
      return true; //token is not expired
    }
    return false; // token has been expired
  }
}
