import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

interface Data {
  title: string;
  text: string;
  image: string;
  id: string;
}
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
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
