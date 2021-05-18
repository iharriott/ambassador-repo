import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../public.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    });

  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.authService.login(this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/']));
  }


}
