import { Component, OnInit } from '@angular/core';
import { CoreFirestoreService } from '../core/core-firestore.service';
import { FireCrypto, FireMarkdown } from '../types.js';

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
              [value]="article.id"
              (click)="loadMd(article.id)"
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
        <markdown [data]="markdown" emoji katex></markdown>
      </div>
    </div>
  `,
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {
  public articles: FireCrypto[];
  public markdown;

  constructor(private fsService: CoreFirestoreService) {}

  public ngOnInit() {
    this.fsService
      .getDocuments('crypto-articles')
      .subscribe((data: FireCrypto[]) => {
        this.articles = data.sort((a, b) => a.order - b.order);
        console.log(this.articles);
      });
  }

  public loadMd(id: string) {
    this.markdown = this.articles
      .find((e) => e.id === id)
      .docBody.replace(/\\n/g, '\n');
  }
}
