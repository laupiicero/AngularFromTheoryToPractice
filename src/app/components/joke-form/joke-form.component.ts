import { Joke } from '../../Joke';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent {

  @Output() myOwnJoke = new EventEmitter<Joke>();
  form: FormGroup;
  punchline: FormControl;
  setup: FormControl;

  constructor() { }

  // Form Controls
  createFormControls() {
    this.setup = new FormControl('', Validators.required);
    this.punchline = new FormControl('', Validators.required);
  }

  createForm() {
    this.form = new FormGroup({
      punchline: this.punchline,
      setup: this.setup
    });
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  // Método Crear Nueva Broma
  makeAJoke(setup: string, punchline: string) {
    this.myOwnJoke.emit(new Joke(setup, punchline));
  }
}
