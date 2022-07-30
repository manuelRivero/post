import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit, OnChanges {
  types:any = {
    primary: 'primary',
    secondary: 'secondary',
    danger: 'danger',
    success: 'success',
  }
  @Input() type:string = ""; 
  buttonClasses:string;
  constructor() { 
    this.buttonClasses = `btn btn-${this.types[this.type]}`;
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['type']){
      this.buttonClasses = `btn btn-${this.types[this.type]}`;
    }
  }
}
