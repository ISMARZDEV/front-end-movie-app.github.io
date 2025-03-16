import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { actorCreateDTO } from 'src/app/_metronic/shared/interfaces/actors/actor.interface';

@Component({
  selector: 'app-actors-form',
  templateUrl: './actors-form.component.html',
  styleUrls: ['./actors-form.component.scss']
})
export class ActorsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  public actorsForm: FormGroup;

  @Input ()
  model: actorCreateDTO;

  @Output ()
  submit: EventEmitter<actorCreateDTO> = new EventEmitter<actorCreateDTO>();

  onSubmit() {
    this.submit.emit(this.actorsForm.value)
  }

  ngOnInit(): void {
    this.setGeneralForm();
  }

  //Validators
  setGeneralForm(){
    this.actorsForm = this.formBuilder.group({
      'actorName': ['', [Validators.required, firstLetterUpperCase()]],
      'birthDay': ['',[Validators.required]]
    })

    if(this.model != undefined){
      this.actorsForm.patchValue(this.model)
    }
  }

  //Error-messages
  getErrorForm(fieldName: string) {

    const formField = this.actorsForm.get(fieldName);

    if (formField?.hasError('required') && formField?.touched) {
      return 'El campo es requerido';
    }

    if (formField?.hasError('minlength')) {
      return 'Debe tener al menos 3 caracteres';
    }
    if (formField?.hasError('firstLetterUpperCase')){
      return 'La primera letra debe ser mayuscula'
    }

    return '';
  }
}


function firstLetterUpperCase(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valor = <string>control.value;
      if(!valor) return null;
      if(valor.length === 0) return null;

      const firstLetter = valor[0];
      if(firstLetter !== firstLetter.toLocaleUpperCase()){
        return {
          firstLetterUpperCase: {
            mesage: 'La primera letra debe ser mayuscula'
          }
        };
      }
      return null;
    }
}
