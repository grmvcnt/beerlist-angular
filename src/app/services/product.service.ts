import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public fetchProducts() {
    return this.httpClient.get<Product[]>('https://api.punkapi.com/v2/beers');
  }
}
