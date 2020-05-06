import { Joke } from './../../Joke';
import { Component, Input, Output, EventEmitter, Directive, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input() joke: Joke;
  @Output() jokeRemove = new EventEmitter<Joke>();
  blackBck = false;
  bigFont = false;
  formato = 'lowercase';

  constructor() { }

  // Borrar broma
  deleteJoke() {
    this.jokeRemove.emit(this.joke);
  }

  // Cambio de fondo y letra
  changeBck() {
    this.blackBck = !this.blackBck;
  }

  changeFont() {
    this.bigFont = !this.bigFont;
  }

  // Cambios pipes

  getformato(joke: Joke) {
    if (this.formato === 'uppercase') {
      return joke.setup.toUpperCase();
    } else {
      return joke.setup.toLowerCase();
    }
  }

  formatoMayusc() {
    this.formato = 'uppercase';
  }

  formatoMinus() {
    this.formato = 'lowercase';
  }

  // Mi directiva personalizada
  assignClasses() {
    let classes = {
      bckChange : this.blackBck,
      size : this.bigFont
    };
    return classes;
  }
}


// Directiva tutorial
@Directive({
  selector: '[.ccCardHover]'
})
export class CardHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
  }
}


