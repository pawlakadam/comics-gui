import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComicsService} from '../comics/comics.service';

@Component({
  selector: 'app-comis-home',
  templateUrl: './comis-home.component.html',
  styleUrls: ['./comis-home.component.css']
})
export class ComisHomeComponent implements OnInit {


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.router.navigate(['list'], {relativeTo: this.activatedRoute});
  }

  addComics(): void {
    this.router.navigate(['add'], {relativeTo: this.activatedRoute});
  }

}
