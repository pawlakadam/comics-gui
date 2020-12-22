import {Component, Input, OnInit} from '@angular/core';
import {Comics} from '../comics.model';
import {ComicsService} from '../../comics.service';

@Component({
  selector: 'app-comics-item',
  templateUrl: './comics-item.component.html',
  styleUrls: ['./comics-item.component.css']
})
export class ComicsItemComponent implements OnInit {
  // @ts-ignore
  @Input() comics: Comics;

  constructor(private service: ComicsService) {
  }

  ngOnInit(): void {
  }


  onSelected(): void {
    this.service.comicsEmiter.emit(this.comics);
  }
}
