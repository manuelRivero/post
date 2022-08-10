import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../auth.service';
import { Component, OnDestroy } from '@angular/core';
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
export class RegisterComponent implements  OnDestroy{
  form: FormGroup;
  formError$: Observable<any> = this.authService.registerError$;
  showModal: boolean = false;
  constructor(private authService: AuthService, public router: Router) {
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
    return this.form.get(name)?.invalid && this.form.get(name)?.touched
      ? true
      : false;
  }
  onSubmit() {
    console.log(this.form.value);
    this.authService.register(this.form.value).subscribe(
      (res: any) => {
        this.showModal = true;
        this.authService.user = { name: res.name, email: 'res.email' };
      },
      (error) => {
        Object.keys(error.error.errors).forEach((key) => {
          console.log("error", error.error.errors[key][0])
          this.authService.registerError = error.error.errors[key][0];
        });
      }
    );
  }

  toggleModal() {
    console.log('toggleModal');
    this.showModal = !this.showModal;
  }
  dialogCallBack = () => {
    this.toggleModal();
    this.router.navigate(['/']);
  };
  ngOnDestroy() {
    this.form.reset()
    this.authService.registerError = null;

  }
}
