import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: require('./hello.html')
})

export class AppComponent {
  greet = 'Hello';
}
