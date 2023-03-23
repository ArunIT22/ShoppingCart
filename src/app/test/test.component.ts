import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //One way Binding
  message: string = "Hello World!!!";

  getText(): string {
    return "One-way Data Binging Demo";
  }

  divMsg = "This is a Div Tag = By Property Binding"

  isValid = false;

  searchedText: string = '';

  onSubmit(): void {
    console.log("Button Clicked");
  }

  onInput(eventData: any) {
    console.log(((eventData.target) as HTMLInputElement).value);
    this.searchedText = ((eventData.target) as HTMLInputElement).value;
  }

  divStyle = "color: red;"

  divStyle2 = "color:green";

  text_BGColor: string = "red yellowBG";

}
