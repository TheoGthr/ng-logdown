import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material.module';
import { CoreModule } from './core/core.module';
import { MarkdownModule } from 'ngx-markdown';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const httpLoaderFactory = (http: HttpClient) =>
  new TranslateHttpLoader(http, 'assets/i18n/');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    MarkdownModule.forRoot({ loader: HttpClient }),
    CoreModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MaterialModule],
})
export class AppModule {}
