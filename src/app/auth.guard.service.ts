import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticate()) {
      return true;
    }
    this.router.navigate([''], {queryParams: {returnUrl: state.url}});
    return false;
    // return this.authService.isAuthenticate()
    //   .then((authenticated: boolean) => {
    //     if (authenticated) {
    //       this.router.navigate(['/comics']);
    //       return true;
    //     } else {
    //       this.router.navigate(['/']);
    //       return false;
    //     }
    //   });

    // if (this.authService.isAuthenticate()) {
    //   return true;
    // } else {
    //   this.router.navigate(['/']);
    // }

  }
}
