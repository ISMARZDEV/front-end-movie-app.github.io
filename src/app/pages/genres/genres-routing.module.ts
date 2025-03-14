import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresListComponent } from './pages/genres-list/genres-list.component';
import { GenresCreateComponent } from './pages/genres-create/genres-create.component';
import { GenresEditComponent } from './pages/genres-edit/genres-edit.component';

const routes: Routes = [
  {
    path: '', //list
    component: GenresListComponent,
  },
  {
    path: 'create',
    component: GenresCreateComponent,
  },
  {
    path: 'edit/:id',
    component: GenresEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenresRoutingModule {}
