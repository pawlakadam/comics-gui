import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComicsResolver} from './comics-resolver.service';
import {ComicsTableComponent} from './comics-table/comics-table.component';
import {ComisHomeComponent} from './comis-home.component';
import {ComicsAddComponent} from './comics-add/comics-add.component';
import {DetailsComponent} from './details/details.component';
import {AuthGard} from '../auth.guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ComisHomeComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: ComicsTableComponent},
      {path: 'add', component: ComicsAddComponent},
      {path: ':id', component: DetailsComponent, resolve: {comicsRes: ComicsResolver}}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule {
}
