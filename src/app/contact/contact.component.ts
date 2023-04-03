import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

//In order make CanDeactiveRouteGuard service universal implement the ICanDeactive interface
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
