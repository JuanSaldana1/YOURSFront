import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup = new FormGroup({
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
    }),
  });
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.registerFormGroup.value, this.registerFormGroup.valid);
  }
}
