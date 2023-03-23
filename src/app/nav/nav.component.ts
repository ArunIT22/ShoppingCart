import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-nav]', //now selector will added as HTML attribute
  selector: '.app-nav', //Adding selector as CSS Class
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
