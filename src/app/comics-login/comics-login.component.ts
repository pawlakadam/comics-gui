import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comics-login',
  templateUrl: './comics-login.component.html',
  styleUrls: ['./comics-login.component.css']
})
export class ComicsLoginComponent implements OnInit {

  wrongCredentials = false;
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userData: this.formBuilder.group({
        username: [null, Validators.required],
        password: [null, Validators.required]
      })
    });

    if (this.authService.isAuthenticate()) {
      this.router.navigate(['/comics']);
    }
  }

  onLogin(login: HTMLInputElement, password: HTMLInputElement): void {
    if (!this.authService.login(login.value, password.value)) {
      this.wrongCredentials = true;
      login.value = '';
      password.value = '';
    } else {
      this.wrongCredentials = false;
    }
  }

  onLogout(): void {
    this.authService.logout();
  }

  get userData(): FormGroup {
    return this.loginForm.controls.userData as FormGroup;
  }
}
