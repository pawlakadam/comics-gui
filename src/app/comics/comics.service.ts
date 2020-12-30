import {Comics} from './comics-list/comics.model';
import {EventEmitter} from '@angular/core';
import {Observable, of} from "rxjs";

export class ComicsService {
  private emiter = new EventEmitter<Comics>();

  private allComics: Comics[] = [new Comics(1, 'Batman', 'Shadow of the bat', 'assets/img/batman.jpg'),
    new Comics(2, 'Superman', 'Action Comics', 'assets/img/superman.jpg'),
    new Comics(3, 'X-men', 'Marvel Comics', 'assets/img/x-men.jpg')];


  get getAllComics(): Comics[] {
    return this.allComics.slice();
  }


  get comicsEmiter(): EventEmitter<Comics> {
    return this.emiter;
  }

  findDetailsComics$(id: number): Observable<Comics> {
    console.log('Szukam: ' + id);
   return of(this.allComics.find(c => c.id === id) as Comics);
  }
}
