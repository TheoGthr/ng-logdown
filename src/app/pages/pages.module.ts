import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CoreModule } from '../core/core.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    MarkdownModule.forChild(),
  ],
  exports: [PagesComponent],
})
export class PagesModule {}
