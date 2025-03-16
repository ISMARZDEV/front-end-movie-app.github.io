import { Component } from '@angular/core';
import { actorCreateDTO } from 'src/app/_metronic/shared/interfaces/actors/actor.interface';

@Component({
  selector: 'app-actors-edit',
  templateUrl: './actors-edit.component.html',
  styleUrls: ['./actors-edit.component.scss']
})
export class ActorsEditComponent {

  model: actorCreateDTO = {name: 'Felipe', birthDay: new Date()};

}
