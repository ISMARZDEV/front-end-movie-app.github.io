import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'validation',
  pure: false,
})
export class ValidationPipe implements PipeTransform {
  transform(value: AbstractControl | null, ...args: any[]): string {
    if (!value?.touched || value?.valid || !value?.errors) return '';
    value.updateValueAndValidity();
    const errors = value.errors;
    const keys = Object.keys(errors);
    const error = String(keys[0]);
    const message = validations[error];
    const field = args[0] ?? '';
    const params = args.slice(1);
    switch (error) {
      case 'minlength':
      case 'maxlength':
        params[0] = errors[error].requiredLength;
        break;
      case 'min':
        params[0] = errors[error].min;
        break;
      case 'max':
        params[0] = errors[error].max;
        break;
      case 'pattern':
        params[0] = errors[error].pattern;
        break;
      case 'minimunDate':
        params[0] = errors[error].minimunDate;
        break;
      case 'invalidDate':
        params[0] = errors[error].value;
        break;
      case 'invalidDateRange':
        params[0] = errors[error].value;
        break;
      case 'invalidAgeRange':
        params[0] = errors[error].value;
        break;
      case 'invalidPhoneNumber':
        params[0] = errors[error].value;
        break;
    }
    return message
      .replace('$0', field)
      .replace('$1', params[0])
      .replace('$2', params[1]);
  }
}

const validations: { [key: string]: string } = {
  required: 'El campo $0 es requerido',
  minlength: 'El campo $0 debe tener al menos $1 caracteres',
  maxlength: 'El campo $0 debe tener como máximo $1 caracteres',
  email: 'El campo $0 debe ser un correo electrónico válido',
  pattern: 'El campo $0 no es válido',
  min: 'El campo $0 debe ser mayor que $1',
  max: 'El campo $0 debe ser menor que $1',
  minimunDate: 'El campo debe ser mayor a la fecha definida',
  minStartDate:
    'La fecha no puede ser menor al dia de hoy ni mayor a la fecha final.',
  maxFinishDate: 'La fecha no puede ser menor a la fecha inicial',
  invalidDate: 'La fecha $0 no es válida',
  invalidDateRange: 'El rango de fechas seleccionado no es válido',
  invalidAgeRange: 'El edad minima debe ser menor a la edad maxima',
  invalidPhoneNumber: 'El número de teléfono no es válido',
  invalidCountryCodePhoneNumber: 'Código de país inválido.',
  tooShortPhoneNumber: 'Número demasiado corto.',
  tooLongPhoneNumber: 'Número demasiado largo.',
  isPossibleLocalOnlyPhoneNumber: 'Número válido solo localmente.',
  invalidLengthPhoneNumber: 'Longitud del número inválida.',

};
