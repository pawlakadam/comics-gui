import {Component, OnInit} from '@angular/core';
import {Comics} from "./comics-list/comics.model";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
// @ts-ignore
  selectedComics: Comics;

  constructor() {
  }

  ngOnInit(): void {
  }

}
