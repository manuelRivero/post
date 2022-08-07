import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {
  @Input() showName:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['showName']){
      this.showName= changes['showName'].currentValue;
    }
  }

}
