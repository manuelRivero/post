import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activation-code',
  templateUrl: './activation-code.component.html',
  styleUrls: ['./activation-code.component.scss']
})
export class ActivationCodeComponent implements OnInit {
  code:string = '';
  canSubmit:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onCodeChanged(code:string){
    this.code = code;
  }
  onCodeCompleted(code:string){
    this.canSubmit = true;
  }
  onSubmit(){
    console.log("code", this.code);
  }
}
