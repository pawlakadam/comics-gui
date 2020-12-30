import {Component, OnInit} from '@angular/core';
import {ComicsService} from '../../comics/comics.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Comics} from '../../comics/comics-list/comics.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectComics$: Observable<Comics>;

  constructor(private comicsService: ComicsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((param: Params) => {
        const index = +param.id;
        this.selectComics$ = this.comicsService.findDetailsComics$(index);
      });
  }

}
