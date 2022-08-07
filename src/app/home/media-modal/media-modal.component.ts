import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-media-modal',
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss'],
})
export class MediaModalComponent implements OnInit, OnChanges {
  @Input() show: boolean = true;
  @Output() hasToClose = new EventEmitter<boolean>();
  @ViewChild('content') content: any;

  image = '/assets/shared/product-placeholder.jpg';
  text = '';

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  open() {
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        this.hasToClose.emit(true);
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes['show'].currentValue === true) {
      console.log('showing modal');
      this.modalService.open(this.content, {
        ariaLabelledBy: 'modal-basic-title',
      });
    } else {
      this.modalService.dismissAll();
    }
  }
}
