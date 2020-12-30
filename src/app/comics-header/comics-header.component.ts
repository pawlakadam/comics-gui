import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-comics-header",
  templateUrl: "./comics-header.component.html",
  styleUrls: ["./comics-header.component.css"]
})
export class ComicsHeaderComponent implements OnInit {
  @Output()
  featureEmitter = new EventEmitter<string>();

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSelected(feature: string): void {
    this.featureEmitter.emit(feature);
  }

  onLogin(): void {
    // this.authService.login();
  }

  onLogout(): void {
    this.authService.logout();
  }

  isAuthenticate(): boolean{
    return this.authService.isAuthenticate();
  }
}
