import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicsHeaderComponent } from './comics-header/comics-header.component';
import { ComicsContentComponent } from './comics-content/comics-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    ComicsHeaderComponent,
    ComicsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
