import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material.module';
import { MarkdownModule } from 'ngx-markdown';
import { NavLangComponent } from './nav-lang/nav-lang.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [NotFoundComponent, NavLangComponent, SidebarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    MarkdownModule.forRoot(),
    FontAwesomeModule,
  ],
  exports: [
    TranslateModule,
    MaterialModule,
    MarkdownModule,
    FontAwesomeModule,
    NotFoundComponent,
    NavLangComponent,
    SidebarComponent,
  ],
})
export class CoreModule {}
