import { NgModule } from '@angular/core';
import { ActorsListComponent } from './pages/actors-list/actors-list.component';
import { CommonModule } from '@angular/common';
import { ModalsModule, WidgetsModule } from 'src/app/_metronic/partials';
import { ActorsRoutingModule } from './actors-routing.module';
import { ActorsCreateComponent } from './pages/actors-create/actors-create.component';
import { ActorsEditComponent } from './pages/actors-edit/actors-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorsFormComponent } from './components/actors-form/actors-form.component';
@NgModule({
  declarations: [
    ActorsListComponent,
    ActorsCreateComponent,
    ActorsEditComponent,
    ActorsFormComponent,
  ],
  imports: [ActorsRoutingModule, FormsModule, CommonModule, ModalsModule, WidgetsModule, ReactiveFormsModule],
})
export class ActorsModule {}
