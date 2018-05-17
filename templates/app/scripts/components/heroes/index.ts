import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import './heroes.css';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.html'
})
export class HeroesComponent implements OnInit {
  /*
  hero = 'Elf-mousE';
  */
  hero: Hero = {
    id: 62,
    name: 'BalmJS'
  };

  constructor() {}

  ngOnInit() {}
}
