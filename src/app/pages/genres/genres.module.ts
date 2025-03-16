import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { GenresRoutingModule } from './genres-routing.module';
import { GenresCreateComponent } from './pages/genres-create/genres-create.component';
import { GenresListComponent } from './pages/genres-list/genres-list.component';
import { GenresEditComponent } from './pages/genres-edit/genres-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationPipe } from 'src/app/_metronic/shared/pipes/validations/validations.pipe';
import { GenresFormComponent } from './components/genres-form/genres-form.component';
import { genresCreateDTO } from '../../_metronic/shared/interfaces/genres/genres.interface';

@NgModule({
  declarations: [
    GenresListComponent,
    GenresCreateComponent,
    GenresEditComponent,
    ValidationPipe,
    GenresFormComponent
  ],
  imports: [GenresRoutingModule, CommonModule, WidgetsModule, ModalsModule, ReactiveFormsModule],
})
export class GenresModule {}
