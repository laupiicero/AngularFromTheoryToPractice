import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { JokeComponent } from './components/joke/joke.component';
import { JokeListComponent } from './components/joke-list-component/joke-list-component.component';
import { JokeFormComponent } from './components/joke-form/joke-form.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

// APP - Component
@Component({
  selector: `app`,
  template: `<joke-list></joke-list>`
})
export class AppComponent {}


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  declarations: [AppComponent, JokeComponent, JokeListComponent, JokeFormComponent],
  bootstrap: [AppComponent]
})export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
