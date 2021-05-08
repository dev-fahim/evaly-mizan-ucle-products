import { Component, OnInit } from '@angular/core';
import {Product, PRODUCTS} from '../../../scully.evaly-mizan-ucle-products.config';
import { SlugifyPipe } from '../slugify.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = PRODUCTS;

  constructor(private slugifyPipe: SlugifyPipe) { }

  ngOnInit(): void {
  }

  slugify(input: string): string {
    return this.slugifyPipe.transform(input);
  }

}
