import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Comics} from '../comics.model';

@Component({
  selector: 'app-comics-item',
  templateUrl: './comics-item.component.html',
  styleUrls: ['./comics-item.component.css']
})
export class ComicsItemComponent implements OnInit {
  // @ts-ignore
  @Input() comics: Comics;

  @Output()
  comicsSelectEmitter = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }


  onSelected() {
    this.comicsSelectEmitter.emit();
  }
}
