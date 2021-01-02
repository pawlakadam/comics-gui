import {Component, OnInit} from '@angular/core';
import {ComicsService} from '../../comics/comics.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IComics} from '../comics.model.component';


@Component({
  selector: 'app-comics-table',
  templateUrl: './comics-table.component.html',
  styleUrls: ['./comics-table.component.css']
})
export class ComicsTableComponent implements OnInit {
  allComics: IComics[] = [];

  constructor(private comicsService: ComicsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.allComics = this.comicsService.getAllComics;
    this.comicsService.comicsEmiter.subscribe(
      (newComics: IComics) => {
        this.allComics.push(newComics);
      }
    );
  }

  sort($event: MouseEvent): void {

  }

  click(id: string): void {
    console.log('Patrz: ' + id);
    if (id === '-1') {
      return;
    }
    if (id) {
      this.router.navigate(['comics/' + id]);
    }
  }
}
