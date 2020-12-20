import {Component, Input, OnInit} from '@angular/core';
import {Comics} from "../comics-list/comics.model";

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css']
})
export class ComicsDetailsComponent implements OnInit {

  @Input()
    // @ts-ignore
  comics: Comics;

  constructor() {
  }

  ngOnInit(): void {
  }

}
