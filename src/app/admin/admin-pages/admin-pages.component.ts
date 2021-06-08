import { Component, OnInit } from '@angular/core';
import { CoreFirestoreService } from '../../core/core-firestore.service';
import { FirePages } from '../../types';

@Component({
  selector: 'lgd-admin-pages',
  styleUrls: ['admin-pages.component.scss'],
  template: `
    <div class="articles-title">
      <h1>Articles</h1>
      <button mat-mini-fab color="primary" aria-label="Add article">
        <mat-icon>plus_one</mat-icon>
      </button>
    </div>
    <mat-selection-list #articlesList [multiple]="false">
      <mat-list-option *ngFor="let article of articles" [value]="article">
        {{ article }}
      </mat-list-option>
    </mat-selection-list>
  `,
})
export class AdminPagesComponent implements OnInit {
  public articles: FirePages[];

  constructor(private coreFs: CoreFirestoreService) {}

  ngOnInit(): void {
    this.coreFs
      .getDocuments('pages-articles')
      .subscribe((data: FirePages[]) => {
        this.articles = data;
      });
  }
}
