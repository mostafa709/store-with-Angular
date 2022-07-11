import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './customValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform: FormGroup;

  constructor(private fb:FormBuilder) {
    
    this.myform= this.fb.group({
      email: [null, [
        Validators.required,
        Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
      ]],
      password: [null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
        ),
      ]],
      username:[null, [
        Validators.required,
        Validators.pattern(
          /^\S*$/
          ),
      ]],
      myname: [null, [
        Validators.required
      ]],
      confirm: [null, [
        Validators.required

      ]],
      address: this.fb.array([]) 
    }, {
      validator:CustomValidators.MatchValidator('password', 'confirm')
    });
  }
  newAdress(): FormGroup {
    return this.fb.group({
      myadress: [null, [
        Validators.required,
        Validators.pattern(/[a-z]/i)
            ]],
      street: [null, [
        Validators.required,
        Validators.pattern(/[a-z]/i)
            ]],
      country: [null, [
        Validators.required,
        Validators.pattern(/[a-z]$/i)
      ]],
      city: [null, [
        Validators.required,
        Validators.pattern(/[a-z]$/i)
      ]],
    })
  }
  get passwordMatchError() {
    return (
      this.myform.getError('mismatch') &&
      this.myform.get('confirm')?.touched
    );
  }
  
  
  get myFormAddress() {
    return this.myform.controls
  }
  addAdress() {
    // console.log(this.myFormAddress);
    
    this.addresses.push(this.newAdress())
 }

  
  get addresses() : FormArray {
    return this.myform.get("address") as FormArray
  }
  removeAdress(i:number) {
    this.addresses.removeAt(i);
  }
  ngOnInit(): void {
  }

}
