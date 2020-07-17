import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoComponent } from './crypto.component';
import { CryptoRoutingModule } from './crypto-routing.module';
import { CoreModule } from '../core/core.module';
import { MarkdownModule } from 'ngx-markdown';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CryptoComponent],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    CoreModule,
    MarkdownModule.forChild(),
  ],
  exports: [CryptoComponent],
})
export class CryptoModule {}
