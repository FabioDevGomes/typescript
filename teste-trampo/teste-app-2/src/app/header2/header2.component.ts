import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'taf-header2',
  template: '<h2>{{inputDecorator}}<h2>'
})
export class Header2Component implements OnInit {
  segundoValor: string = "segundo Valor" 
  @Input() inputDecorator: string
  
  
  constructor() { }

  ngOnInit() {
  }

}
