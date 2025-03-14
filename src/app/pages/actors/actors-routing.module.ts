import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsListComponent } from './pages/actors-list/actors-list.component';
import { ActorsCreateComponent } from './pages/actors-create/actors-create.component';
import { ActorsEditComponent } from './pages/actors-edit/actors-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ActorsListComponent,
  },
  {
    path: 'create',
    component: ActorsCreateComponent,
  },
  {
    path: 'edit/:id',
    component: ActorsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsRoutingModule {}
