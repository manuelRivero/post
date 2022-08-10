import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  OnChanges,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit, OnChanges {
  closeResult = '';
  @Input() text: string = '';
  @Input() title: string = '';
  @Input() buttonText: string = '';
  @Input() show: boolean = false;
  @Input() cb: any = () => {};
  @ViewChild('content', { static: true }) private content!: ElementRef;
  @Output() hasToClose = new EventEmitter<boolean>();

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}

  open() {
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.cb();
        },
        (reason) => {
          this.cb();
        }
      );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes['show'].currentValue === true) {
      this.open();
    } else {
      console.log('close');
      this.modalService.dismissAll();
    }
  }
}
