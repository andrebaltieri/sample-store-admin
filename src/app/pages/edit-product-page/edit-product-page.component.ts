import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  providers: [FormBuilder, DataService]
})
export class EditProductPageComponent implements OnInit {
  public id: string = '';
  public form: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private dataService: DataService, private router: Router) {
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
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getProduct(this.id);
    });
  }

  getProduct(id) {
    this.dataService
      .getProduct(id)
      .subscribe(data => {
        this.form.controls['title'].setValue(data.title);
        this.form.controls['price'].setValue(data.price);
        this.form.controls['image'].setValue(data.image);
      });
  }

  submit() {
    this.dataService
      .putProduct(this.id, this.form.value)
      .subscribe(data => {
        this.router.navigateByUrl('/products');
      });
  }
}
