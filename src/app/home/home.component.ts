import { Component } from '@angular/core';
import { SidebarViews } from '../constants';

@Component({
  selector: 'lgd-home',
  template: `
    <div class="theme-base-0d">
      <lgd-sidebar [sidebarView]="sidebarViews.default"></lgd-sidebar>
      <div class="content container">
        <mat-card>
          <mat-card-header>
            <mat-card-title>History of cryptography</mat-card-title>
            <mat-card-subtitle>From Ceasar to maths</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>
              A little blog about cryptography: simple mechanisms, history and
              book recomendations.
            </p>
          </mat-card-content>
          <mat-card-actions>
            <button
              mat-raised-button
              routerLink="/pages/crypto"
              color="primary"
            >
              Go!
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
})
export class HomeComponent {
  public sidebarViews = SidebarViews;
}
