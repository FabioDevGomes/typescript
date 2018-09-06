import { Component } from '@angular/core';
import { Estudante } from './estudent/estudante.model';

@Component({
  selector: 'taf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fabio = {name: 'Fábio', isJedi: true, temple: 'JavaEE'}
  leandro = {name: 'Leandro', isJedi: false}
  igor = {name: 'Igor', isJedi: false}

  estudantes: Estudante[] = [
    {name: 'Fábio', isJedi: true, temple: 'JavaEE'},
    {name: 'Leandro', isJedi: false},
    {name: 'Igor', isJedi: false}
  ]

  aulas: Aula[] = [
    {turma: 'Sábado', cargaHoraria: 120, aulaHoje: true},
    {turma: 'Domingo', cargaHoraria: 140, aulaHoje: false},
    {turma: 'Terça e Quinta', cargaHoraria: 120, aulaHoje: false}
  ]

}
