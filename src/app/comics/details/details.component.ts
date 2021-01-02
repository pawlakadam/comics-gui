import {Component, OnInit} from '@angular/core';
import {ComicsService} from '../../comics/comics.service';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {Observable, of} from 'rxjs';
import {IComics} from '../comics.model.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectComics: IComics;

  constructor(private comicsService: ComicsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data: Data) => {
        this.selectComics = data.comicsRes;
      }
    );
    // this.activatedRoute.params
    //   .subscribe((param: Params) => {
    //     const index = param.id;
    //     this.selectComics$ = this.comicsService.findDetailsComics$(index);
    //   });
  }

}
