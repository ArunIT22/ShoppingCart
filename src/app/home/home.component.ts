import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    { id: 2, name: 'Apple Watch', price: 45999, color: 'Grey', isInStock: 'Available', image: '/assets/products/AppleWatch.jpg' },
    { id: 4, name: 'Apple iPad Air', price: 44999, color: 'Grey', isInStock: 'Available', image: '/assets/products/iPAD.jpg' },
    { id: 5, name: 'Nikon 5200', price: 25599, color: 'Black', isInStock: 'Available', image: '/assets/products/NikonCamera.jpg' },
    { id: 6, name: 'Oneplus TV 43 inch', price: 29999, color: 'Black', isInStock: 'Not Available', image: '/assets/products/OneplusTV.jpg' },
  ]

}
