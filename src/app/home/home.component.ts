import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from '../memes.contants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() contador = 0;
  @Output() contadorChange = new EventEmitter()

  memes = MEMES_AGRUPADOS_POR_CATEGORIA;
  

  prefixoImagem = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images'

    constructor() { 
    
  }

  ngOnInit(): void {
  }

  clickAumentaContador($event: any) {
      this.contador += 1
      this.contadorChange.emit(this.contador);
  }

  clickDiminuiContador($event: any) {
    this.contador -= 1
    this.contadorChange.emit(this.contador);
  }

}
