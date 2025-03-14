import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemasListComponent } from './pages/cinemas-list/cinemas-list.component';
import { CinemasCreateComponent } from './pages/cinemas-create/cinemas-create.component';
import { CinemasEditComponent } from './pages/cinemas-edit/cinemas-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CinemasListComponent,
  },
  {
    path: 'create',
    component: CinemasCreateComponent,
  },
  {
    path: 'edit/:id',
    component: CinemasEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaRoutingModule {}
