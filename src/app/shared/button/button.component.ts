import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit, OnChanges {
 
  @Input() type:string = ""; 
  constructor() { 
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['type']){
      this.type = changes['type'].currentValue;
    }
  }
}
