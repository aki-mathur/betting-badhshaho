import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { AngularTokenService } from 'angular-token'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  submitted: Boolean =  false;

  constructor(private formBuilder: FormBuilder, private tokenService: AngularTokenService) {
    this.registrationForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirm_password: ['',Validators.required],
      name: ['',Validators.required],
      mobile: ['',Validators.required]
    }) 
   }

   onSubmit(){
     this.submitted = true;
     console.log(this.registrationForm);
     if(this.registrationForm.invalid){
       return;
     }
     this.tokenService.registerAccount({
          login:                this.registrationForm.value.email,
          password:             this.registrationForm.value.password,
          passwordConfirmation: this.registrationForm.value.confirm_password,
          name:                 this.registrationForm.value.name,
          mobile:               this.registrationForm.value.mobile,
      }).subscribe(
          res =>      console.log(res),
          error =>    console.log(error)
      );
   }

  ngOnInit() {
  }

}
