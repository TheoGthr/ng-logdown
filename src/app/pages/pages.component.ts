import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreFirestoreService } from '../core/core-firestore.service';
import { FirePages } from '../types.js';

@Component({
  selector: 'lgd-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <div class="theme-base-0f">
      <div class="sidebar">
        <div class="sidebar-sticky">
          <div class="sidebar-about">
            <h1>Pages</h1>
          </div>
          <mat-selection-list #articlesLinks [multiple]="false">
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
      <div
        class="content container"
        [ngClass]="{ 'page-center': routeState === 'not-found' }"
      >
        <div *ngIf="routeState === 'idle'">
          <!-- TODO: put smth at first launch -->
        </div>
        <markdown
          *ngIf="routeState === 'loaded'"
          [data]="selectedArticleBody"
          emoji
          katex
        ></markdown>
        <lgd-not-found *ngIf="routeState === 'not-found'"></lgd-not-found>
      </div>
    </div>
  `,
})
export class PagesComponent implements OnInit {
  public articles: FirePages[];
  public routeState = 'idle';
  public selectedArticleBody: string;

  constructor(
    private fsService: CoreFirestoreService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params?.page !== undefined) {
        this.fsService.getDocuments('pages').subscribe((pages: FirePages[]) => {
          const idx = pages?.findIndex((p) => p.route === params.page);
          if (idx > -1) {
            this.routeState = 'loaded';
            this.fsService
              .getDocuments(`${pages[idx].route}-articles`)
              .subscribe((data: FirePages[]) => {
                this.articles = data?.sort((a, b) => a.order - b.order);
                this.loadMd(
                  this.articles?.find((e) => e.order === 0)?.id ||
                    this.articles[0]?.id
                );
              });
          } else {
            this.routeState = 'not-found';
          }
        });
      }
    });
  }

  public loadMd(id: string) {
    this.selectedArticleBody = this.articles
      .find((e) => e.id === id)
      ?.docBody.replace(/\\n/g, '\n');
  }
}
