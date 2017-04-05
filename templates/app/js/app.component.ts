import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [] // Required property: NG or angular2-template-loader's bug -_-
})
export class AppComponent {
  greet = 'Hello';
}
