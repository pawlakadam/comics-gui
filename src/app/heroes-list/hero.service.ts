import {Hero} from './hero.model';
import {EventEmitter} from "@angular/core";
import {Observable, of} from "rxjs";

export class HeroService {
  private selectedHero = new EventEmitter<Hero>();
  private heroes: Hero[] = [new Hero('Batman'), new Hero('Spiderman')];


  get getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }

  addHero(hero: Hero): void {
    this.heroes.push(hero);
    this.selectedHero.emit(hero);
  }
}
