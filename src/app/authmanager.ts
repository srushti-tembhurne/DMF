import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()

export class AuthManager{
    constructor(private router: Router){

    }
    CanActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot){
        if(window.localStorage.getItem('auth_key'))
        return true;

        console.log('You must be logged in');
        this.router.navigate(['/login']);
        return false;
    }
}