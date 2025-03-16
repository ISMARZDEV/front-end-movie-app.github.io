import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { genresCreateDTO } from 'src/app/_metronic/shared/interfaces/genres/genres.interface';

@Component({
  selector: 'app-genres-create',
  templateUrl: './genres-create.component.html',
  styleUrls: ['./genres-create.component.scss']
})
export class GenresCreateComponent {

  constructor (private router: Router) { }

  saveChanges(Genres: genresCreateDTO){
    console.log(Genres);
    this.router.navigate(['/genres/list'])
  }
}
