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

  image: null | string = null;
  isLoading: boolean = false;

  form = new FormGroup({
    file: new FormControl('', [Validators.required]),
    text: new FormControl(''),
  });

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  open() {
    this.modalService
      .open(this.content, { centered: true, size: 'lg' })
      .result.then((result) => {
        this.hasToClose.emit(false);
      });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['show'].currentValue === true) {
      this.open();
    } else {
      this.modalService.dismissAll();
    }
  }
  submit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.modalService.dismissAll();
      this.hasToClose.emit(false);
    }, 1000);

    console.log('submit');
  }
  getValidation(name: string): any {
    return this.form.get(name)?.invalid && this.form.get(name)?.touched
      ? true
      : false;
  }
  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files[0]) {
      const file = target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => (this.image = reader.result as string);

      reader.readAsDataURL(file);
    }
  }
}
