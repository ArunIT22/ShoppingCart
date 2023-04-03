import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";
import { Product } from "./product";

@Injectable()//only for the last demo
export class ProductService {

  //For injecting one service into another service demo
  constructor(private logService: LogService) {

  }

  public productList: Product[] = [];

  public getProducts(): Product[] {
    this.productList = [
      { id: 1, name: 'Amazfit Watch', price: 5999, color: 'Black', inStock: true, image: '/assets/products/Amazfit.jpg' },
      { id: 2, name: 'Apple Watch', price: 45999, color: 'Grey', inStock: true, image: '/assets/products/AppleWatch.jpg' },
      { id: 3, name: 'Boat Watch', price: 3999, color: 'Blue', inStock: false, image: '/assets/products/BoatWave.jpg' },
      { id: 4, name: 'Apple iPad Air', price: 44999, color: 'Grey', inStock: true, image: '/assets/products/iPAD.jpg' },
      { id: 5, name: 'Nikon 5200', price: 25599, color: 'Black', inStock: true, image: '/assets/products/NikonCamera.jpg' },
      { id: 6, name: 'Oneplus TV 43 inch', price: 29999, color: 'Black', inStock: false, image: '/assets/products/OneplusTV.jpg' },
      { id: 7, name: 'Samsung 24" Monitor', price: 12499, color: 'Black', inStock: true, image: '/assets/products/SamsungMonitor.jpg' }
    ];
    return this.productList;
  }

  public getProductByName(productName: string): Product[] {
    let findProduct: Product[] = [];
    this.getProducts().forEach((prd) => {
      if (prd.name.toLocaleLowerCase().includes(productName)) {
        findProduct.push(prd);
      }
    });
    return findProduct;
  }

  public addProduct(newProduct: Product) {
    this.productList.push(newProduct);
    this.logService.LogMessage(newProduct.name, newProduct.inStock ? "Available" : "Not Available", new Date());
  }

  //In order to use EventEmitter we can use subject from rxjs
  //Subject is a special type of Observable that allows values to be multicasted to many observers.
  //Subject are like EventEmitter
  searchedProductEmitter = new Subject<Product[]>();

  onSearchProduct(products: Product[]) {
    this.searchedProductEmitter.next(products);
  }

}
