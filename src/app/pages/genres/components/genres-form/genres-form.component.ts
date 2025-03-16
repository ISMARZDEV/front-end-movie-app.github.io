import { Component, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { genresCreateDTO } from 'src/app/_metronic/shared/interfaces/genres/genres.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-genres-form',
  templateUrl: './genres-form.component.html',
  styleUrls: ['./genres-form.component.scss'],
})
export class GenresFormComponent implements OnInit {

  ngOnInit(): void {

    this.setGeneralForm();

    if(this.model !== undefined){
      this.genresForm.patchValue(this.model);
    }
  }

  constructor(private formBuilder: FormBuilder) {}

  public genresForm: FormGroup;

  @Input()
  model: genresCreateDTO;

  @Output()
  submit: EventEmitter<genresCreateDTO> = new EventEmitter<genresCreateDTO>();



  setGeneralForm() {
    this.genresForm = this.formBuilder.group({
      genresName: ['', [Validators.required, firstLetterUpperCase()]],
    });
  }

  getErrorForm(fieldName: string) {
    const formField = this.genresForm.get(fieldName);

    if (formField?.hasError('required') && formField.touched) {
      return 'El campo es requerido';
    }
    if (formField?.hasError('firstLetterUpperCase')) {
      return 'La primera letra debe ser mayuscula';
    }
    ;
  }
  processor() {
    console.log(this.genresForm.value);
  }
}

function firstLetterUpperCase(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = <string>control.value;
    if (!valor) return null;
    if (valor.length === 0) return null;

    const firstLetter = valor[0];
    if (firstLetter !== firstLetter.toLocaleUpperCase()) {
      return {
        firstLetterUpperCase: {
          mesage: 'La primera letra debe ser mayuscula',
        },
      };
    }
    return null;
  };
}

// constructor(private formBuilder: FormBuilder) { }

//   public genresForm: FormGroup;

//   ngOnInit(): void {
//     this.setGeneralForm();
//   }

//   setGeneralForm() {
//   this.genresForm = this.formBuilder.group({
//     'genresName': ['', [Validators.required, Validators.minLength(3), firstLetterUpperCase()]],
//   })
// }

//   getErrorForm(){
//     var genresField = this.genresForm.get('genresName');
//       if(genresField?.hasError('required') && genresField?.touched)
//       {
//         return 'El campo es requerido'
//       }
//       if(genresField?.hasError('minlength'))
//         {
//           return 'La longitud minima es de 3 caracters'
//         }
//       if(genresField?.hasError('firstLetterUpperCase'))
//         {
//           return genresField.getError('firstLetterUpperCase').mesage;
//         }
//       return '';
//   }

//   procesar(){
//     console.log(this.genresForm.value)
//   }

// }

// //Validación Personalizada

// function firstLetterUpperCase(): ValidatorFn {
//     return (control: AbstractControl): ValidationErrors | null => {
//       const valor = <string>control.value;
//       if(!valor) return null;
//       if(valor.length === 0) return null;

//       const firstLetter = valor[0];
//       if(firstLetter !== firstLetter.toLocaleUpperCase()){
//         return {
//           firstLetterUpperCase: {
//             mesage: 'La primera letra debe ser mayuscula'
//           }
//         };
//       }
//       return null;
//     }
// }
