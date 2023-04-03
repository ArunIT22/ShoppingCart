import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  // products = [
  //   { id: 1, name: 'Amazfit Watch', price: 5999, color: 'Black', inStock: 'Available', image: '/assets/products/Amazfit.jpg' },
  //   { id: 2, name: 'Apple Watch', price: 45999, color: 'Blue', inStock: 'Available', image: '/assets/products/AppleWatch.jpg' },
  //   { id: 3, name: 'Boat Watch', price: 2999, color: 'Black', inStock: 'Not Available', image: '/assets/products/BoatWave.jpg' },
  //   { id: 4, name: 'Dell Laptop', price: 65999, color: 'Grey', inStock: 'Available', image: '/assets/products/dell_inspiron.jpg' },
  //   { id: 5, name: 'HP Laptop', price: 89999, color: 'Black', inStock: 'Not Available', image: '/assets/products/HP_Envy.jpg' },
  //   { id: 6, name: 'LG Monitor', price: 12499, color: 'Black', inStock: 'Available', image: '/assets/products/LGMonitor.jpg' },
  //   { id: 7, name: 'Samsung Monitor', price: 14499, color: 'Black', inStock: 'Available', image: '/assets/products/SamsungMonitor.jpg' },
  //   { id: 8, name: 'MacBook Air Laptop', price: 85499, color: 'Silver', inStock: 'Available', image: '/assets/products/MacbookAir.jpg' },
  // ];

  @Input() productName: string = '';

  goToHome() {
    this.route.navigate(['Home']);
  }

}
