import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DropDownDirective} from '../share/dropdown.directive';
import {ComicsFilterComponent} from './comics-filter/comics-filter.component';
import {ComicsAddComponent} from './comics-add/comics-add.component';
import {ComisHomeComponent} from './comis-home.component';
import {DetailsComponent} from './details/details.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component';
import {ComicsTableComponent} from './comics-table/comics-table.component';
import {ComicsLoginComponent} from '../comics-login/comics-login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ComicsService} from './comics.service';
import {ComicsResolver} from './comics-resolver.service';
import {AuthService} from '../auth.service';
import {AuthGard} from '../auth.guard.service';




@NgModule({
  declarations: [
    DropDownDirective,
    ComicsFilterComponent,
    ComicsAddComponent,
    ComisHomeComponent,
    ComicsTableComponent,
    DetailsComponent,
    ComicsLoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ComicsService,
    ComicsResolver, AuthService, AuthGard],
})
export class ComicsModule {
}
