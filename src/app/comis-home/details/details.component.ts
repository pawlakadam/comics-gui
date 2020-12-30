import { Component, OnInit } from '@angular/core';
import {ComicsService} from '../../comics/comics.service';
import {ActivatedRoute} from '@angular/router';
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
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const param = +this.activatedRoute.snapshot.params.id;
    this.selectComics$ = this.comicsService.findDetailsComics$(param);
  }

}
