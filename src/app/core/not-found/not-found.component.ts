import { Component } from '@angular/core';

@Component({
  selector: 'lgd-home',
  template: `
    <div class="not-found">
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{
            'core.not-found.title' | translate
          }}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>{{ 'core.not-found.subtitle' | translate }}</p>
        </mat-card-content>
        <button mat-raised-button routerLink="/" color="primary">
          {{ 'core.not-found.back' | translate }}
        </button>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .not-found {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }

      mat-card {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class NotFoundComponent {}
