import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  
  isOpen: boolean = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.toggleButton.nativeElement) {
        this.isOpen = false;
      }
    });
  }

  ngOnInit(): void {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
}
