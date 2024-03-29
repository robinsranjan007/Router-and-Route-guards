import { Injectable } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from './contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class GuradService implements CanActivate,CanActivateChild,CanDeactivate<ContactComponent>{

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

    canDeactivate(component:ContactComponent,route:ActivatedRouteSnapshot,state:RouterStateSnapshot,next:RouterStateSnapshot):boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
      return false;
    }

     

}
