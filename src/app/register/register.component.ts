import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
    }),
  });
  constructor() {}

  ngOnInit(): void {
    this.registerFormGroup.valid === false;
  }

  onSubmit() {
    console.log(this.registerFormGroup.value, this.registerFormGroup.valid);
  }
}
