import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  providers: [FormBuilder, DataService]
})
export class AddProductPageComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(60),
        Validators.required
      ])],
      price: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required
      ])],
      image: ['', Validators.compose([
        Validators.minLength(20),
        Validators.maxLength(1024),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

  submit() {
    this.dataService
      .postProduct(this.form.value)
      .subscribe(data => {
        this.router.navigateByUrl('/products');
      });
  }
}
