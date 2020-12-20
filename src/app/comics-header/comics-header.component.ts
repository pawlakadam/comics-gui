import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comics-header',
  templateUrl: './comics-header.component.html',
  styleUrls: ['./comics-header.component.css']
})
export class ComicsHeaderComponent implements OnInit {
  @Output()
  featureEmitter = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelected(feature: string): void {
    this.featureEmitter.emit(feature);
  }

}
