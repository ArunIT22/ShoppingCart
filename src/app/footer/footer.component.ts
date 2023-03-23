import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div>
    <p> This website uses cookies to provide better user experience. </p>
  </div>
  `,
  styles: ["div{margin:10px 10px; padding:10px 20px; background-color:coral; text-align:center}", "p{font-size:18px;}"]

})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
