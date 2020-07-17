import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { articlesEn, articlesFr } from '../../assets/articles/crypto/crypto.js';

@Component({
  selector: 'crypto',
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
            <nav-lang></nav-lang>
          </nav>
          <p>
            <small>{{ 'home.navbar.legal' | translate }}</small>
          </p>
        </div>
      </div>
      <div class="content container">
        <markdown [src]="markdown" emoji katex></markdown>
      </div>
    </div>
  `,
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {
  public articles: any;
  public markdown;

  constructor(private translateService: TranslateService) {
    this.changeArticlesLang();
  }

  ngOnInit(): void {
    console.log(this.translateService.currentLang);
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
