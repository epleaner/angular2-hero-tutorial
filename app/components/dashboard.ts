import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Hero from '../models/hero';
import HeroService from '../services/hero.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/templates/dashboard.html',
  styleUrls: ['app/styles/dashboard.component.css']
})

export default class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/details', hero.id];
    this.router.navigate(link);
  }
}