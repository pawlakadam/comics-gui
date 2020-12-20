import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comics-gui';
  selectedFeature = 'myList';

  onSelected(feature: string): void {
    this.selectedFeature = feature;
  }
}
