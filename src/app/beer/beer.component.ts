import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  //@ts-ignore
  @Input() product: Products;

  constructor() { }

  ngOnInit(): void {
  }

}
