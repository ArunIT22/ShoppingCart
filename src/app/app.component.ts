import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ShoppingCart';
  message = "Hello World!!!";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((val) => {
      console.log(val);
      document.getElementById(val!)?.scrollIntoView({ behavior: 'smooth' });
    })
  }


}
