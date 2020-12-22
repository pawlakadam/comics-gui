import {Comics} from './comics-list/comics.model';
import {EventEmitter} from '@angular/core';

export class ComicsService {
  private emiter = new EventEmitter<Comics>();

  private allComics: Comics[] = [new Comics('Batman', 'Shadow of the bat', 'assets/img/batman.jpg'),
    new Comics('Superman', 'Action Comics', 'assets/img/superman.jpg'),
    new Comics('X-men', 'Marvel Comics', 'assets/img/x-men.jpg')];


  get getAllComics(): Comics[] {
    return this.allComics.slice();
  }


  get comicsEmiter(): EventEmitter<Comics> {
    return this.emiter;
  }
}
