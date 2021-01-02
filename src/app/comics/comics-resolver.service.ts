import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ComicsService} from './comics.service';
import {IComics} from './comics.model.component';

@Injectable()
export class ComicsResolver implements Resolve<IComics> {
  constructor(private comicsService: ComicsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComics> | Promise<IComics> | IComics {
    return this.comicsService.findDetailsComics$(route.params.id);
  }

}
