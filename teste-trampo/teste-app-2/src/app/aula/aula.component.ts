import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'taf-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  @Input() aula: Aula

  constructor() { }

  ngOnInit() {
  }

}
