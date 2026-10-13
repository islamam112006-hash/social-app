import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule ,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
[x: string]: any;
error(arg0: string) {
throw new Error('Method not implemented.');
}
showPassword() {
throw new Error('Method not implemented.');
}

  x : string = "islam";


  registerforml = new FormGroup({
    _name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Za-z]+$/)
    ]),
    get name() {
      return this._name;
    },
    set name(value) {
      this._name = value;
    },
    username : new FormControl( null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Za-z]+$/)
      
    ]),
    email : new FormControl( null, [
      Validators.required,
      Validators.email
    ]),
    gender : new FormControl( null, [
      Validators.required,
      Validators.pattern(/^(male|female)$/)
    ]),
    dateOfBirth : new FormControl( null, [
      Validators.required,
    ]),
    repassword : new FormControl( null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]),
    password : new FormControl( null, [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    ]),

  });

  test() {
    console.log(this.registerforml.value);
  }
}
