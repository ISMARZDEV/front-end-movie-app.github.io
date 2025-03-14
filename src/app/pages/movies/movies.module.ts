import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MoviesCreateComponent } from './pages/movies-create/movies-create.component';

import { ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesEditComponent } from './pages/movies-edit/movies-edit.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesCreateComponent,
    MoviesEditComponent,
  ],
  imports: [MoviesRoutingModule, CommonModule, WidgetsModule, ModalsModule],
})
export class MoviesModule {}
