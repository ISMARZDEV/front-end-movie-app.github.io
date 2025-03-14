import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { GenresRoutingModule } from './genres-routing.module';
import { GenresCreateComponent } from './pages/genres-create/genres-create.component';
import { GenresListComponent } from './pages/genres-list/genres-list.component';
import { GenresEditComponent } from './pages/genres-edit/genres-edit.component';

@NgModule({
  declarations: [
    GenresListComponent,
    GenresCreateComponent,
    GenresEditComponent,
  ],
  imports: [GenresRoutingModule, CommonModule, WidgetsModule, ModalsModule],
})
export class GenresModule {}
