import {Component, OnInit} from '@angular/core';
import {Comics} from '../../comics/comics-list/comics.model';
import {ComicsService} from '../../comics/comics.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comics-table',
  templateUrl: './comics-table.component.html',
  styleUrls: ['./comics-table.component.css']
})
export class ComicsTableComponent implements OnInit {
  allComics: Comics[] = [];

  constructor(private comicsService: ComicsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.allComics = this.comicsService.getAllComics;
    this.comicsService.comicsEmiter.subscribe(
      (newComics: Comics) => {
        this.allComics.push(newComics);
      }
    );
  }

  sort($event: MouseEvent): void {

  }

  click(id: number): void {
    this.router.navigate(['comics/' + id]);
  }
}
