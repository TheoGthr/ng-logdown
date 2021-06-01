import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { articlesEn, articlesFr } from '../../assets/articles/crypto/crypto.js';
import { CoreFirestoreService } from '../core/core-firestore.service';
import { FireMarkdown } from '../types.js';

@Component({
  selector: 'lgd-crypto',
  template: `
    <div class="theme-base-0f">
      <div class="sidebar">
        <div class="sidebar-sticky">
          <div class="sidebar-about">
            <h1>Crypto</h1>
          </div>
          <mat-selection-list #article [multiple]="false">
            <mat-list-option
              *ngFor="let article of articles"
              [value]="article.file"
              (click)="loadMd(article.file)"
            >
              {{ article.title }}
            </mat-list-option>
          </mat-selection-list>
          <nav class="sidebar-nav">
            <a routerLink="/" class="sidebar-nav-item">{{
              'home.navbar.home-link' | translate
            }}</a>
            <lgd-nav-lang></lgd-nav-lang>
          </nav>
          <p>
            <small>{{ 'home.navbar.legal' | translate }}</small>
          </p>
        </div>
      </div>
      <div class="content container">
        <markdown [data]="testArticle" emoji katex></markdown>
      </div>
    </div>
  `,
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent {
  public articles: any;
  public markdown;
  public testArticle = '';

  constructor(
    private translateService: TranslateService,
    private fsService: CoreFirestoreService
  ) {
    this.changeArticlesLang();
    this.fsService
      .getDocuments('crypto-articles')
      .subscribe((data: FireMarkdown[]) => {
        this.testArticle = data[0].docBody.replace(/\\n/g, '\n');
      });
  }

  public changeArticlesLang() {
    this.articles =
      this.translateService.currentLang === 'fr' ? articlesFr : articlesEn;
  }

  public setLang(lang: string) {
    this.translateService.use(lang);
    this.changeArticlesLang();
  }

  public loadMd(filename: string) {
    console.log(this.translateService.currentLang);
    const pathToFile = `assets/articles/crypto/${this.translateService.currentLang}/${filename}.md`;
    this.markdown = pathToFile;
  }
}
