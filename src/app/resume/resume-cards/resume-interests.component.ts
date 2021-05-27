import { Component } from '@angular/core';
import {
  faHeart,
  faMusic,
  faHeadphones,
  faHeartbeat,
  faUtensilSpoon,
  faHotel,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'resume-interests',
  styleUrls: ['resume-cards.component.scss'],
  template: `
    <mat-card>
      <mat-card-header>
        <div mat-card-avatar>
          <fa-icon [icon]="faHeart"></fa-icon>
        </div>
        <mat-card-title>{{
          'resume.interests.title' | translate
        }}</mat-card-title>
      </mat-card-header>
      <mat-card-content class="mat-typography">
        <div class="all-interests">
          <div class="two-interests">
            <div class="interest">
              <fa-icon [icon]="faHeadphones" size="2x"></fa-icon>
              <p>{{ 'resume.interests.music' | translate }}</p>
            </div>
            <div class="interest">
              <fa-icon [icon]="faMusic" size="2x"></fa-icon>
              <p>{{ 'resume.interests.instruments' | translate }}</p>
            </div>
          </div>
          <div class="two-interests">
            <div class="interest">
              <fa-icon [icon]="faUtensilSpoon" size="2x"></fa-icon>
              <p>{{ 'resume.interests.cooking' | translate }}</p>
            </div>
            <div class="interest">
              <fa-icon [icon]="faHeartbeat" size="2x"></fa-icon>
              <p>{{ 'resume.interests.running' | translate }}</p>
            </div>
          </div>
          <div class="two-interests">
            <div class="interest">
              <fa-icon [icon]="faHotel" size="2x"></fa-icon>
              <p>{{ 'resume.interests.community' | translate }}</p>
            </div>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
})
export class ResumeInterestsComponent {
  faHeart = faHeart;
  faMusic = faMusic;
  faHeadphones = faHeadphones;
  faUtensilSpoon = faUtensilSpoon;
  faHeartbeat = faHeartbeat;
  faHotel = faHotel;
}
