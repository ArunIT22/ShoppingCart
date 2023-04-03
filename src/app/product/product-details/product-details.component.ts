import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/services/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  productId: any;
  product!: Product | undefined;
  mySubscription: any;

  constructor(private activatedRoute: ActivatedRoute, private service: ProductService, private route: Router) { }

  ngOnInit(): void {
    //this.productId = this.activatedRoute.snapshot.params["id"];//old approach
    //this.productId = this.activatedRoute.snapshot.paramMap.get("id");
    // this.product = this.service.getProducts().find(x => x.id == this.productId);
    // this.product ?? this.route.navigate(['404']);

    //Get route value using Observable
    this.mySubscription = this.activatedRoute.paramMap.subscribe((data) => {
      this.productId = data.get("id");
      this.product = this.service.getProducts().find(x => x.id == this.productId);
      this.product ?? this.route.navigate(['404']);
    })
    // console.log(this.productId);

  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}
