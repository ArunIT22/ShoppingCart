import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string = "Realme";

  constructor() { }

  ngOnInit(): void {
  }

  onInput(eventData: any) {
    console.log(((eventData.target) as HTMLInputElement).value);
    this.searchText = ((eventData.target) as HTMLInputElement).value;
  }

}
