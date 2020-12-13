import { Component, OnInit } from '@angular/core';
import {Menu} from './menu.api';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {

  allMenu: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.allMenu.push(new Menu('Mój zbiór', '2'));
    this.allMenu.push(new Menu('Bohaterowie', '3'));
  }

}
