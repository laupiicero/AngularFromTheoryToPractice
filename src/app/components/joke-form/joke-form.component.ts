import { Joke } from '../../Joke';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent{

  @Output() jokeCreated = new EventEmitter<Joke>();
  form: FormGroup;
  punchline: FormControl;
  setup: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }


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

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
