import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { AngularTokenService } from 'angular-token'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm: FormGroup;
  submitted: Boolean =  false;

  constructor(private formBuilder: FormBuilder, private tokenService: AngularTokenService) {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    }) 
   }

   onSubmit(){
     this.submitted = true;
     console.log(this.loginForm);
     if(this.loginForm.invalid){
       return;
     }
     this.tokenService.signIn({
          login:                this.loginForm.value.email,
          password:             this.loginForm.value.password
      }).subscribe(
          res =>      console.log(res),
          error =>    console.log(error)
      );
   }

   ngOnInit(){

   }
}
