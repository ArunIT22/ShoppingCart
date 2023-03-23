import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  messageText: string = "You can Shop Mobiles and Tablets here";

  logo: string = "/assets/shopping.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
