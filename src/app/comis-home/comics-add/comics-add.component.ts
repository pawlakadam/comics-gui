import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-comics-add',
  templateUrl: './comics-add.component.html',
  styleUrls: ['./comics-add.component.css']
})
export class ComicsAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  comicsAddForm: FormGroup;

  ngOnInit(): void {
    this.comicsAddForm = this.formBuilder.group({
      title: [null, Validators.required],
      publisher: [null, Validators.required]
    });
  }
}
