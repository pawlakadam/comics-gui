import {EventEmitter} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IComics} from './comics.model.component';

export class ComicsService {
  private emiter = new EventEmitter<IComics>();

  private allComics: IComics[] = [{id: '1', title: 'Batman', publisher: 'Shadow of the bat', number: '3/93', fileContent: 'assets/img/batman.jpg'},
    {id: '2', title: 'Superman', publisher: 'Action Comics', number: '4/96', fileContent: 'assets/img/superman.jpg'},
    {id: '3', title: 'X-men', publisher: 'Marvel Comics', number: '6/95', fileContent: 'assets/img/x-men.jpg'}];


  get getAllComics(): IComics[] {
    return this.allComics.slice();
  }


  get comicsEmiter(): EventEmitter<IComics> {
    return this.emiter;
  }

  findDetailsComics$(id: string): IComics {
   return this.allComics.find(c => c.id === id) as IComics;
  }
}
