import { Component } from '@angular/core';
import { Product } from "../model/product";
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: Product[] = [];
  public product: any;
  public displayThirdColumn: boolean | undefined;
  serviceError: boolean | undefined;

  constructor(private productService: ProductService) {
    this.fetchProducts();
  }

  public ngOnInit(): void {
    this.fetchProducts();
  }

  public fetchProducts() {
    this.productService.fetchProducts()
      .subscribe((res: Product[]) => {
        console.log(res);
        this.products = res;
        this.product = this.products[0];
      }, (err) => {
        console.log(err);
        this.serviceError = true;
      }
      );
  }
}
