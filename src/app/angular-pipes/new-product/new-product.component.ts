import { Component, OnInit } from '@angular/core';
import { NewProductService } from '../product.services';
import { NewProduct } from '../product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  products!: NewProduct[];
  filteredText: string = '';

  constructor(private service: NewProductService) { }

  ngOnInit(): void {
    this.products = this.service.getAllProducts();
  }

}
