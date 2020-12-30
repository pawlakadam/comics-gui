import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ComicsListComponent} from "./comics/comics-list/comics-list.component";
import {ComicsHeaderComponent} from "./comics-header/comics-header.component";
import {ComicsDetailsComponent} from "./comics/comics-details/comics-details.component";
import {ComicsItemComponent} from "./comics/comics-list/comics-item/comics-item.component";
import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {HeroesEditComponent} from "./heroes-list/heroes-edit/heroes-edit.component";
import {ComicsComponent} from "./comics/comics.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropDownDirective} from "./share/dropdown.directive";
import {HeroService} from "./heroes-list/hero.service";
import {ComisFilterComponent} from "./comis-home/comis-filter/comis-filter.component";
import {ComisAddComponent} from "./comis-home/comis-add/comis-add.component";
import { ComisHomeComponent } from "./comis-home/comis-home.component";
import { ComicsTableComponent } from "./comis-home/comics-table/comics-table.component";
import { DetailsComponent } from "./comis-home/details/details.component";
import {ComicsService} from "./comics/comics.service";
import {AuthService} from "./auth.service";
import { ComicsLoginComponent } from './comics-login/comics-login.component';
import {AuthGard} from "./auth.guard.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



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
    DropDownDirective,
    ComisFilterComponent,
    ComisAddComponent,
    ComisHomeComponent,
    ComicsTableComponent,
    DetailsComponent,
    ComicsLoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroService, ComicsService, AuthService, AuthGard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
