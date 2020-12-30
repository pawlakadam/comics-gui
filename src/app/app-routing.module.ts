import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComisHomeComponent} from './comis-home/comis-home.component';
import {ComicsAddComponent} from './comis-home/comics-add/comics-add.component';
import {DetailsComponent} from './comis-home/details/details.component';
import {AuthGard} from './auth.guard.service';
import {ComicsLoginComponent} from './comics-login/comics-login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ComicsTableComponent} from './comis-home/comics-table/comics-table.component';

const routes: Routes = [
  {path: '', component: ComicsLoginComponent, pathMatch: 'full'},
  {
    path: 'comics', canActivate: [AuthGard], canActivateChild: [AuthGard], component: ComisHomeComponent, children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: ComicsTableComponent},
      {path: 'add', component: ComicsAddComponent},
      {path: ':id', component: DetailsComponent}
    ]
  },
  {path: 'not-found', canActivate: [AuthGard], component: PageNotFoundComponent, data: {message: 'Ta strona nie istnieje'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
