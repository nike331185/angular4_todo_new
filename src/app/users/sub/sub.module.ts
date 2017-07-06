import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TitleComponent,
    FooterComponent,
  ],
  exports: [
    FooterComponent,
  ],
})
export class SubModule { }
