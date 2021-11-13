import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  user : any;
  constructor(private tockenService: TokenStorageService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    this.user = this.tockenService.getUser();
    if(this.user==null){
      console.log("User Present"+JSON.stringify(this.user));
      return true;
    }
    else{
      return this.router.createUrlTree(['/login']);
    }

  }
}
