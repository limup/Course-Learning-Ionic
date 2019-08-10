import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot 
  ): Observable<boolean> | Promise<boolean> | boolean{

    const loggedIn = Math.random() > 0.5 ? true : false;

    if(!loggedIn){
      this.route.navigate(['/'])
    }

    return loggedIn;
  }
}
