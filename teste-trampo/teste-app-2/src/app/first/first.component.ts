import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'taf-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title3: string = 'Meu primeiro componente';
  user = {name: 'Fábio Alves Gomes',
          isJedi: true}

  constructor() { }

  ngOnInit() {
  }

}
