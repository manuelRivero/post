import { animate, state, style, transition, trigger, query, keyframes } from '@angular/animations';
import { Component, Input, OnInit, SimpleChanges, OnChanges, Renderer2, ViewChild, ElementRef } from '@angular/core';

interface Data {
  title: string;
  text: string;
  image: string;
  id: string;
}
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  animations:[
    trigger('menuAnimation', [
      transition('* => *', [
        query(':enter', animate('.5s',  keyframes([
          style({
            opacity: 0, transform:'translateY(-100%)'
          }),
          style({
            opacity: 1, transform:'translateY(-110%)', 
          }),
          style({
            opacity: 1, transform:'translateY(-100%)', 
          })
        ])), { optional: true }),
        query(':leave', animate('.5s', 
        keyframes([
          style({
            opacity: 1, transform:'translateY(-100%)'
          }),
          style({
            opacity: 1, transform:'translateY(-110%)', 
          }),
          style({
            opacity: 0, transform:'translateY(-100%)', 
          })
        ])), { optional: true }),
      ])
    ])
  ]
})
export class PostCardComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;

  @Input() data:Data ={
    title: "",
    text: "",
    image: "",
    id: ""
  }
  showMenu:boolean = false;
  isLoading:boolean = false;
  reaction: number | null = null
  constructor(private renderer: Renderer2) { 
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.toggleButton.nativeElement && !this.menu.nativeElement.contains(e.target)) {
        this.showMenu = false;
      }
    });
  }

  ngOnInit(): void {
  }
 toggleMenu(){
    this.showMenu = !this.showMenu;
 }
 toggleLoading(target:number){
   this.isLoading = true;
   setTimeout(() => {
    this.reaction = target;
    this.isLoading = false;
  }, 1000);
 }
}
