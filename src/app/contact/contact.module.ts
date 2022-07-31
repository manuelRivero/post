import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';

@NgModule({
  declarations: [ContactComponent, CommentsComponent],
  imports: [CommonModule, ContactRoutingModule, BootstrapModule],
})
export class ContactModule {}
