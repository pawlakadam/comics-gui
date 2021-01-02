import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComicsHeaderComponent} from './comics-header/comics-header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropDownDirective} from './share/dropdown.directive';
import {ComicsFilterComponent} from './comics/comics-filter/comics-filter.component';
import {ComicsAddComponent} from './comics/comics-add/comics-add.component';
import {ComisHomeComponent} from './comics/comis-home.component';
import {ComicsTableComponent} from './comics/comics-table/comics-table.component';
import {DetailsComponent} from './comics/details/details.component';
import {ComicsService} from './comics/comics.service';
import {AuthService} from './auth.service';
import {ComicsLoginComponent} from './comics-login/comics-login.component';
import {AuthGard} from './auth.guard.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from './auth-interceptor.service';
import {ComicsResolver} from './comics/comics-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    ComicsHeaderComponent,
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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
 ComicsService, AuthService, AuthGard,
  ComicsResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
