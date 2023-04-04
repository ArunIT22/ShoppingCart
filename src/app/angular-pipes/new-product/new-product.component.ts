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

  addProduct() {
    console.log("New Product Added");
    // this.products.push({ id: 109, name: 'Apple M1 air', category: 'Tablet', price: 89999.99, discount: 10, addedDate: new Date(2021, 10, 5) })
    let copyProduct = Object.assign([], this.products);
    copyProduct.push({ id: 109, name: 'Apple M1 air', category: 'Tablet', price: 89999.99, discount: 10, addedDate: new Date(2021, 10, 5) })
    this.products = copyProduct;
  }


  totalProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.service.getAllProducts().length);
    }, 2000);
  })
}
