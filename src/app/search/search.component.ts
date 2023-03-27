import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onInput(eventData: any) {
    console.log(((eventData.target) as HTMLInputElement).value);
    this.searchText = ((eventData.target) as HTMLInputElement).value;
  }

  //Share the SearchedText from Child to Parent(Container) - @Ouput thru event binding
  @Output() searchedTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onChanged(){
    this.searchedTextChanged.emit(this.searchText);
  }

}
