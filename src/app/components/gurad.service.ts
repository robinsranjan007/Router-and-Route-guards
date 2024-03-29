import { Injectable } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuradService implements CanActivate,CanActivateChild{

constructor(private guardservices:AuthService,private route:Router){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
  {
    if(this.guardservices.isAuthenticated())
    {
      return true; 

    }
    else
    {

      this.route.navigate(['login'])
      return false;
    }

  }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.canActivate(childRoute,state);
    }


}
