import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form: FormGroup;
  formError$: Observable<any> = this.authService.registerError$;
  showModal: boolean = true;
  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup(
      {
        name: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            CustomValidators.onlyChar(),
          ])
        ),
        email: new FormControl(
          '',
          Validators.compose([Validators.required, Validators.email])
        ),
        password: new FormControl(
          '',
          Validators.compose([Validators.required, Validators.minLength(6)])
        ),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: CustomValidators.passwordMatchValidator }
      );
  }

  getValidation(name: string): any {
    console.log('getValidation', name);
    return this.form.get(name)?.invalid && this.form.get(name)?.touched
      ? true
      : false;
  }
  onSubmit() {
    console.log(this.form.value);
    this.authService.register(this.form.value).subscribe((res: any) => {
      this.authService.user = { name: res.name, email: 'res.email' };
      this.router.navigate(['/']);
    }, (error) => {
      console.log("error", error)
      this.authService.registerError = "error";
      this.router.navigate(['/']);

    });
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
