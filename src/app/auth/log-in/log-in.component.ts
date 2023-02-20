import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email:[null, [Validators.required]],
    password:[null, [Validators.required]]
  })
  constructor( private fb: FormBuilder, private authService: AuthService) { }

  submit():void{
    this.authService.login(this.loginForm.value)
  }
  ngOnInit(): void {
  }

}
