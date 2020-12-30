import {Injectable} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Injectable()
export class AuthService {
  private isLogged = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  isAuthenticate(): boolean {
    return this.isLogged;
  }

  login(login: string, password: string): boolean {
    if (login === 'kasia' && password === 'kasia') {
      this.isLogged = true;
      let routerPath = '/comics';
      this.activatedRoute.queryParams.subscribe(
        (params: Params) => {
          if (params.returnUrl) {
            routerPath = params.returnUrl;
          }
        }
      );
      this.router.navigate([routerPath]);
    }
    return this.isLogged;
  }

  logout(): void {
    this.isLogged = false;
    this.router.navigate(['/']);
  }
}
