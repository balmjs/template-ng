import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const logo = require('@/assets/angular.svg');

@Component({
  selector: 'app-root',
  template: require('./hello.html'),
  styles: [require('./hello.css')]
})
export class AppComponent {
  title: string;
  logo: any;

  constructor(private sanitizer: DomSanitizer) {
    this.title = 'Angular';
    this.logo = sanitizer.bypassSecurityTrustResourceUrl(logo);
  }
}
