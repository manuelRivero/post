import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { PostCardComponent } from './post-card/post-card.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PostCardComponent,
    HeaderComponent,
    HeroSectionComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [
    ButtonComponent,
    PostCardComponent,
    HeaderComponent,
    HeroSectionComponent,
  ],
})
export class SharedModule {}
