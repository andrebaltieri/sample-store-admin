import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  providers: [DataService]
})
export class ProductPageComponent implements OnInit {
  public products: any[] = [];

  constructor(private dataService: DataService) {
    this.dataService
      .getProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

  ngOnInit() {
  }

  remove(product) {
    this.dataService
      .deleteProduct(product.id)
      .subscribe(data => {
        const index = this.products.indexOf(product);
        this.products.splice(index, 1);
        alert('Produto removido');
      });
  }

}
