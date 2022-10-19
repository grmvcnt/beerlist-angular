import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: Product[] = [];

  constructor(private httpClient: HttpClient) {
    this.fetchProducts();
  }

  public fetchProducts() {
    this.httpClient.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((res: Product[]) => {
        this.products = res.slice(0, 6);
      });
  }
}
