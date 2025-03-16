import { Component } from '@angular/core';
import { actorCreateDTO } from 'src/app/_metronic/shared/interfaces/actors/actor.interface';

@Component({
  selector: 'app-actors-create',
  templateUrl: './actors-create.component.html',
  styleUrls: ['./actors-create.component.scss']
})
export class ActorsCreateComponent {

  saveChanges(Actor: actorCreateDTO){
    console.log(Actor)
  }
}
