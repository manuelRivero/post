import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-generator',
  templateUrl: './content-generator.component.html',
  styleUrls: ['./content-generator.component.scss']
})
export class ContentGeneratorComponent implements OnInit {
  showModal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
