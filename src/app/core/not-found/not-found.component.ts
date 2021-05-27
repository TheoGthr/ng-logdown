import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'lgd-home',
  template: `
    <div class="not-found">
      <mat-card>
        <mat-card-header>
          <mat-card-title>404 Not found</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>The page you requested does not exist.</p>
        </mat-card-content>
        <button mat-raised-button routerLink="/" color="primary">
          Return to home
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
export class NotFoundComponent {
  constructor(private translateService: TranslateService) {}
}
