import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MoviesCreateComponent } from './pages/movies-create/movies-create.component';
import { MoviesEditComponent } from './pages/movies-edit/movies-edit.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
  },
  {
    path: 'create',
    component: MoviesCreateComponent,
  },
  {
    path: 'edit/:id',
    component: MoviesEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
