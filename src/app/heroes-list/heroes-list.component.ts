import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero.model";

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.heroes.push(new Hero('Batman'), new Hero('Spiderman'));
  }

}
