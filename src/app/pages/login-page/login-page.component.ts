import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  providers: [FormBuilder, DataService]
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (token && username) {
      this.router.navigateByUrl('/products');
    }
  }

  submit() {
    this.dataService
      .authenticate(this.form.value)
      .subscribe(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);

        this.router.navigateByUrl('/products');
      }, error => {
        alert('Usuário ou senha inválidos');
      });
  }

}
