import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material.module';
import { MarkdownModule } from 'ngx-markdown';
import { NavLangComponent } from './nav-lang/nav-lang.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreFirestoreService } from './core-firestore.service';

export const httpLoaderFactory = (http: HttpClient) =>
  new TranslateHttpLoader(http);

const routes: Routes = [];

@NgModule({
  declarations: [NotFoundComponent, NavLangComponent, SidebarComponent],
  providers: [CoreFirestoreService],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    MaterialModule,
    MarkdownModule.forRoot(),
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    TranslateModule,
    MaterialModule,
    MarkdownModule,
    FontAwesomeModule,
    NotFoundComponent,
    NavLangComponent,
    SidebarComponent,
    RouterModule,
  ],
})
export class CoreModule {}
