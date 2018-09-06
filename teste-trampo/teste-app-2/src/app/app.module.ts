import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header2Component } from './header2/header2.component';
import { FirstComponent } from './first/first.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';
import { EstudentComponent } from './estudent/estudent.component';
import { AulaComponent } from './aula/aula.component';


@NgModule({
  declarations: [
    AppComponent,
    Header2Component,
    FirstComponent,
    NovoComponenteComponent,
    EstudentComponent,
    AulaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
