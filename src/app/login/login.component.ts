import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {
    this.loginFormGroup.valid === false;
  }

  onSubmit() {
    console.log(this.loginFormGroup.value, this.loginFormGroup.valid);
  }
}
