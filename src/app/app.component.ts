import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'PrimeiroProjeto';
  contadorApp = 10;

  headerTitle = 'Seja bem-vindo de novo!'
  
    constructor() { }

}


