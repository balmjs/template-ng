import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './hello.html',
  styleUrls: [] // Required property: NG or angular2-template-loader's bug -_-
})
export class AppComponent {
  greet = 'Hello';
}
