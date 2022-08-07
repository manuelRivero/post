import {
  AbstractControl,
  ValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

export class CustomValidators {
  constructor() {}

  static onlyChar(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value == '') return null;

      let re = new RegExp('^[a-zA-Z ]*$');
      if (re.test(control.value)) {
        return null;
      } else {
        return { onlyChar: true };
      }
    };
  }

  static passwordMatchValidator=(g: FormGroup | any)=> {
    g.controls['confirmPassword'].setErrors(g.get('password').value === g.get('confirmPassword').value
       ? g.controls['confirmPassword'].errors : {'notSame': true});
    return g;
  }
}
