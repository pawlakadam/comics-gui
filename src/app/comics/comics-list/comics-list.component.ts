import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Comics} from './comics.model';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  allComics: Comics[] = [];

  @Output() comicsSelectedEmitter = new EventEmitter<Comics>();

  constructor() {
  }

  ngOnInit(): void {
    this.allComics.push(
      new Comics('Batman', 'Shadow of the bat', 'assets/img/batman.jpg'),
      new Comics('Superman', 'Action Comics', 'assets/img/superman.jpg'),
      new Comics('X-men', 'Marvel Comics', 'assets/img/x-men.jpg'));
  }


  onSelected(comics: Comics): void {
    this.comicsSelectedEmitter.emit(comics);
  }
}
