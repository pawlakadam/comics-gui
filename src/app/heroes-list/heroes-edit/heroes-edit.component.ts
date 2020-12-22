import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-heroes-edit',
  templateUrl: './heroes-edit.component.html',
  styleUrls: ['./heroes-edit.component.css']
})
export class HeroesEditComponent implements OnInit {
  @ViewChild('nameInput') localNameRef: ElementRef;

  @Output() addInputEmitter = new EventEmitter<{title: string}>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddItem(): void{
    this.addInputEmitter.emit(this.localNameRef.nativeElement.value);
  }

}
