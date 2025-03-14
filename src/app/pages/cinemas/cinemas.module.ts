import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemasCreateComponent } from './pages/cinemas-create/cinemas-create.component';
import { CinemasEditComponent } from './pages/cinemas-edit/cinemas-edit.component';
import { CinemaRoutingModule } from './cinemas-routing.module';
import { ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { CinemasListComponent } from './pages/cinemas-list/cinemas-list.component';

@NgModule({
  declarations: [
    CinemasListComponent,
    CinemasCreateComponent,
    CinemasEditComponent,
  ],
  imports: [CinemaRoutingModule, CommonModule, WidgetsModule, ModalsModule],
})
export class CinemasModule {}
