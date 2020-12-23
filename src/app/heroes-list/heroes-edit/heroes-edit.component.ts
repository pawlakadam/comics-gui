import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from "../hero.model";

@Component({
  selector: 'app-heroes-edit',
  templateUrl: './heroes-edit.component.html',
  styleUrls: ['./heroes-edit.component.css']
})
export class HeroesEditComponent {
  @ViewChild('nameInput') localNameRef: ElementRef;

  @Output() addInputEmitter = new EventEmitter<{ title: string }>();

  constructor(private service: HeroService) {
  }


  onAddItem(): void {
    const hero = new Hero(this.localNameRef.nativeElement.value);
    this.service.addHero(hero);
  }

}
