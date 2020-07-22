import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  template: require('./heroes.html'),
  styles: [require('./heroes.css')]
})
export class HeroesComponent implements OnInit {
  @Input() hero: Hero;

  constructor() {}

  ngOnInit(): void {
    this.hero = {
      id: 62,
      name: 'BalmJS'
    };
  }
}
