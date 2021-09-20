import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { LoginModel } from '../../../models/login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl({value: '', disabled: false}, [ Validators.required, Validators.maxLength(155)]),
      pass: new FormControl({value: '', disabled: false}, [ Validators.required, Validators.maxLength(155)]),
    });
  }
  
  onLogin(form: LoginModel){
    this.api.onLoginByEmail(form).subscribe(data => {
      console.log(data)
    })
  }

}
