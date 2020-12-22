import {Component, OnInit} from '@angular/core';
import {Comics} from './comics-list/comics.model';
import {ComicsService} from './comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  providers: [ComicsService]
})
export class ComicsComponent implements OnInit {
// @ts-ignore
  selectedComics: Comics;

  constructor(private service: ComicsService) {
  }

  ngOnInit(): void {
    this.service.comicsEmiter.subscribe(
      (comics: Comics) => {
        this.selectedComics = comics;
      }
    );
  }

}
