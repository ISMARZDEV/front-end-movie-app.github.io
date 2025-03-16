import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { genresCreateDTO } from 'src/app/_metronic/shared/interfaces/genres/genres.interface';


@Component({
  selector: 'app-genres-edit',
  templateUrl: './genres-edit.component.html',
  styleUrls: ['./genres-edit.component.scss']
})
export class GenresEditComponent {

  constructor (private router: Router) { }

  model: genresCreateDTO = {name: 'Drama'}

  saveChanges(Genres: genresCreateDTO){
    console.log(Genres);
    this.router.navigate(['/genres/list'])
  }
}
