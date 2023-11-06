import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SharedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]

})
export class SharedModule { }
