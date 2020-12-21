import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsListComponent } from './comics/comics-list/comics-list.component';
import { ComicsHeaderComponent } from './comics-header/comics-header.component';
import { ComicsDetailsComponent } from './comics/comics-details/comics-details.component';
import { ComicsItemComponent } from './comics/comics-list/comics-item/comics-item.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesEditComponent } from './heroes-list/heroes-edit/heroes-edit.component';
import { ComicsComponent } from './comics/comics.component';
import {FormsModule} from '@angular/forms';
import {DropDownDirective} from './share/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    ComicsListComponent,
    ComicsHeaderComponent,
    ComicsDetailsComponent,
    ComicsItemComponent,
    HeroesListComponent,
    HeroesEditComponent,
    ComicsComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
