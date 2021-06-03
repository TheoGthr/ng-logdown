import { Component, OnInit } from '@angular/core';
import { CoreFirestoreService } from '../../core/core-firestore.service';
import { FireCrypto } from '../../types';

@Component({
  selector: 'lgd-admin-crypto',
  styleUrls: ['admin-crypto.component.scss'],
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
export class AdminCryptoComponent implements OnInit {
  public articles: FireCrypto[];

  constructor(private coreFs: CoreFirestoreService) {}

  ngOnInit(): void {
    this.coreFs
      .getDocuments('crypto-articles')
      .subscribe((data: FireCrypto[]) => {
        this.articles = data;
      });
  }
}
