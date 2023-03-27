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
  hasError = false;

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

  //NgStyle
  myNgStyles = {
    'color': this.isValid ? 'green' : 'red',
    'border': this.hasError ? '2px solid red' : '2px solid green',
    'backgroundColor': this.isValid ? 'yellow' : 'coral'
  }

  cities = [
    { cityName: 'Mumbai', population: 50000 },
    { cityName: 'Chennai', population: 35000 },
    { cityName: 'Bengaluru', population: 40000 },
    { cityName: 'Hyderabad', population: 40000 },
    { cityName: 'Delhi', population: 60000 },
    { cityName: 'Trivandrum', population: 25000 },
  ];

  // getClass(total: number): string {
  //   if (total > 40000)
  //     return 'text-success';
  //   else
  //     return 'text-primary';
  // }

  getClass = (total: number) => total > 40000 ? 'text-success' : 'text-danger';
}
