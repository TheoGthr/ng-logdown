import { Component } from '@angular/core';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'resume-education',
  styleUrls: ['resume-cards.component.scss'],
  template: `
    <mat-card>
      <mat-card-header>
        <div mat-card-avatar>
          <fa-icon [icon]="faGraduationCap"></fa-icon>
        </div>
        <mat-card-title>{{
          'resume.education.title' | translate
        }}</mat-card-title>
      </mat-card-header>
      <mat-card-content class="mat-typography">
        <!-- CVUT -->
        <div class="experience-item">
          <div class="enterprise-date">
            <div
              [innerHTML]="'resume.education.cvut.title' | translate"
              class="enterprise mat-title"
            ></div>
            <div
              [innerHTML]="'resume.education.cvut.duration' | translate"
              class="date mat-h3"
            ></div>
          </div>
          <div
            [innerHTML]="'resume.education.cvut.subtitle' | translate"
            class="mat-body-strong"
          ></div>
          <mat-list role="list">
            <mat-list-item
              role="listitem"
              [innerHTML]="'resume.education.cvut.description' | translate"
            ></mat-list-item>
          </mat-list>
          <mat-divider></mat-divider>
        </div>
        <!-- TSE -->
        <div class="experience-item">
          <div class="enterprise-date">
            <div
              [innerHTML]="'resume.education.tse.title' | translate"
              class="enterprise mat-title"
            ></div>
            <div
              [innerHTML]="'resume.education.tse.duration' | translate"
              class="date mat-h3"
            ></div>
          </div>
          <div
            [innerHTML]="'resume.education.tse.subtitle' | translate"
            class="mat-body-strong"
          ></div>
          <mat-list role="list">
            <mat-list-item
              role="listitem"
              [innerHTML]="'resume.education.tse.description' | translate"
            >
            </mat-list-item>
          </mat-list>
          <mat-divider></mat-divider>
        </div>
        <!-- CPGE -->
        <div class="experience-item">
          <div class="enterprise-date">
            <div
              [innerHTML]="'resume.education.prepa.title' | translate"
              class="enterprise mat-title"
            ></div>
            <div
              [innerHTML]="'resume.education.prepa.duration' | translate"
              class="date mat-h3"
            ></div>
          </div>
          <div
            [innerHTML]="'resume.education.prepa.subtitle' | translate"
            class="mat-body-strong"
          ></div>
          <mat-list role="list">
            <mat-list-item
              role="listitem"
              [innerHTML]="'resume.education.prepa.description' | translate"
            >
            </mat-list-item>
          </mat-list>
        </div>
      </mat-card-content>
    </mat-card>
  `,
})
export class ResumeEducationComponent {
  faGraduationCap = faGraduationCap;
}
