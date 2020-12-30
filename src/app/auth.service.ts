import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
  private isLogged = false;

  constructor(private router: Router) {
  }

  isAuthenticate(): boolean {
    return this.isLogged;
  }

  login(login: string, password: string): boolean {
    if (login === "kasia" && password === "kasia") {
      this.isLogged = true;
      this.router.navigate(["/comics"]);
    }
    return this.isLogged;
  }

  logout(): void {
    this.isLogged = false;
    this.router.navigate(["/"]);
  }
}
