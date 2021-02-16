import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'PrimeiroProjeto';
  contadorInicial = 10;

  headerTitle = 'Seja bem-vindo de novo!'
  contador = 0;

    constructor() { }


    contadorAlterado($event: any) {
        console.log("Contador foi alterado no app-home!")
    }
}


