import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ContactComponent,
    PagesComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
