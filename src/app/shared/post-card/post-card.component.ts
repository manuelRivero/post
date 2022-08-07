import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

interface Data {
  title: string;
  text: string;
  image: string;
  id: string;
}
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() data:Data ={
    title: "",
    text: "",
    image: "",
    id: ""
  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
