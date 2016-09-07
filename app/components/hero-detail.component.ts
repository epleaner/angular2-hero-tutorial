import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import HeroService from '../services/hero.service';
import Hero from '../models/hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/templates/hero-detail.html',
  styleUrls: ['app/styles/hero-detail.component.css']
})

export default class HeroDetailComponent implements OnInit {
  constructor(private heroService: HeroService,
              private route: ActivatedRoute) {
  }

  hero: Hero;

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero)
    });
  }

  goBack(): void {
    window.history.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(this.goBack);
  }
}