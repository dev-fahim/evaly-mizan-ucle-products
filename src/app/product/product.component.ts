import {Component, Input, OnInit} from '@angular/core';
import {Product, PRODUCTS} from '../../../scully.evaly-mizan-ucle-products.config';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  mpProducts: Product[] = PRODUCTS;
  product: Product = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.product = this.mpProducts[params.index - 1];
    });
  }

}
