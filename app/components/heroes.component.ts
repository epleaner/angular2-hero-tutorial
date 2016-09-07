import {Component} from '@angular/core';
import { Router } from '@angular/router';

import {OnInit} from '@angular/core';
import Hero from '../models/hero';
import HeroService from '../services/hero.service';

@Component({
  selector: 'heroes',
  templateUrl: 'app/templates/heroes.html',
  styleUrls: ['app/styles/heroes.component.css']
})

export default class HeroesComponent implements OnInit {
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(hero: Hero): void {
    this.router.navigate(['/details', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h =>h !== hero);
        if(this.selectedHero === hero) {
          this.selectedHero = null;
        }
    });
  }
}