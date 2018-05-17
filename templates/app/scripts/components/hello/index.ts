import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import './hello.css';

const URL = require('../../../images/angular.svg');

@Component({
  selector: 'app-root',
  templateUrl: './hello.html'
})
export class AppComponent {
  title: string;
  logo: any;

  constructor(private sanitizer: DomSanitizer) {
    this.title = 'Angular';
    this.logo = sanitizer.bypassSecurityTrustResourceUrl(URL);
  }
}
