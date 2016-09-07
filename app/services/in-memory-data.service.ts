import { InMemoryDbService } from 'angular2-in-memory-web-api';

import HEROES from '../mocks/mock-heroes';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {heroes: HEROES};
  }
}