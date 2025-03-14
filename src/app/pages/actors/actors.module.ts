import { NgModule } from '@angular/core';
import { ActorsListComponent } from './pages/actors-list/actors-list.component';
import { CommonModule } from '@angular/common';
import { ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsCreateComponent } from './pages/actors-create/actors-create.component';
import { ActorsEditComponent } from './pages/actors-edit/actors-edit.component';

@NgModule({
  declarations: [
    ActorsListComponent,
    ActorsCreateComponent,
    ActorsEditComponent,
  ],
  imports: [ActorsRoutingModule, CommonModule, ModalsModule, WidgetsModule],
})
export class ActorsModule {}
