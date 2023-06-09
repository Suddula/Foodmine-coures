import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!:FormGroup;
  isSubmitted =false;

 constructor(private formBuilder:FormBuilder){

 }
 ngOnInit(){
  this.loginForm = this.formBuilder.group({
    email:[' ',[Validators.required,Validators.email]],
    password:['',Validators.required]
    //this.loginForm.controls.email it same as this.fc.email
  })
 }
 get fc(){
  return this.loginForm.controls;
 }
 Submit(){
  this.isSubmitted =true;
  if(this.loginForm.invalid) return;

  alert(`email: ${this.fc.email.value},password:${this.fc.password.value}`)

 }
}
