import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-genres-create',
  templateUrl: './genres-create.component.html',
  styleUrls: ['./genres-create.component.scss']
})
export class GenresCreateComponent {

  get name(){
    return this.formUser.get('name') as FormControl;
  }
  get email(){
    return this.formUser.get('email') as FormControl;
  }
  get direction(){
    return this.formUser.get('direction') as FormControl;
  }

  formUser = new FormGroup({
  'name': new FormControl('', Validators.required),
  'email': new FormControl('', [Validators.required, Validators.email]),
  'direction': new FormControl('', Validators.required)
  })

  procesar(){
    console.log(this.formUser.value)
  }

  // name = new FormControl('', Validators.required);
  // email = new FormControl('', [Validators.required, Validators.email]);
  // direction = new FormControl('', Validators.required);
}
