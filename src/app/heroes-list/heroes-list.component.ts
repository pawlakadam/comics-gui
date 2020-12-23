import {Component, OnInit} from '@angular/core';
import {Hero} from './hero.model';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private service: HeroService) {
  }

  ngOnInit(): void {
    this.service.getHeroes
      .subscribe(
        ((heroes: Hero[]) => {
          this.heroes = heroes;
        })
      );
  }

}
