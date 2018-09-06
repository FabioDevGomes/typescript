import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from './estudante.model';

@Component({
  selector: 'taf-estudent',
  templateUrl: './estudent.component.html',
  styleUrls: ['./estudent.component.css']
})
export class EstudentComponent implements OnInit {

  @Input() estudante: Estudante

  constructor() { }

  ngOnInit() {
  }

}
