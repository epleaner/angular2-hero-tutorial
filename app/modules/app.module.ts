import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from '../services/in-memory-data.service';

import AppComponent from '../components/app.component';
import DashboardComponent from '../components/dashboard';
import HeroDetailComponent from '../components/hero-detail.component';
import HeroesComponent from '../components/heroes.component';
import HeroService from '../services/hero.service';

import routing from '../routing';
import {HeroSearchComponent} from '../components/hero-search.component';

import '../rxjs-extensions';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      routing
    ],
    declarations: [
      AppComponent,
      DashboardComponent,
      HeroesComponent,
      HeroDetailComponent,
      HeroSearchComponent
    ],
    bootstrap: [AppComponent],
    providers: [HeroService]
})

export class AppModule { }