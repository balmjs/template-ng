import { Component } from '@angular/core';
import './hello.css';

@Component({
  selector: 'app-root',
  template: require('./hello.html')
})

export class AppComponent {
  greet = 'Hello';
}
