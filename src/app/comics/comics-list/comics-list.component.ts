import {Component, OnInit} from '@angular/core';
import {Comics} from './comics.model';
import {ComicsService} from '../comics.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  allComics: Comics[] = [];

  constructor(private service: ComicsService) {
  }

  ngOnInit(): void {
    this.allComics = this.service.getAllComics;
  }
}
