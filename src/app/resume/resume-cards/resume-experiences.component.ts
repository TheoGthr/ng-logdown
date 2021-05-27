import { Component } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'resume-experiences',
  styleUrls: ['resume-cards.component.scss'],
  template: `
    <mat-card class>
      <mat-card-header>
        <div mat-card-avatar>
          <fa-icon [icon]="faBriefcase"></fa-icon>
        </div>
        <mat-card-title>{{
          'resume.experiences.title' | translate
        }}</mat-card-title>
      </mat-card-header>
      <mat-card-content class="mat-typography">
        <!-- Sopra Steria -->
        <div class="experience-item">
          <div class="enterprise-date">
            <div
              [innerHTML]="'resume.experiences.sopra.title' | translate"
              class="enterprise mat-title"
            ></div>
            <div
              [innerHTML]="'resume.experiences.sopra.duration' | translate"
              class="date mat-h3"
            ></div>
          </div>
          <mat-list role="list">
            <mat-list-item
              role="listitem"
              [innerHTML]="'resume.experiences.sopra.jobs.one' | translate"
            ></mat-list-item>
            <mat-list-item
              role="listitem"
              [innerHTML]="'resume.experiences.sopra.jobs.two' | translate"
            ></mat-list-item>
            <mat-list-item
              role="listitem"
              [innerHTML]="'resume.experiences.sopra.jobs.three' | translate"
            ></mat-list-item>
            <mat-list-item
              role="listitem"
              [innerHTML]="'resume.experiences.sopra.jobs.four' | translate"
            ></mat-list-item>
          </mat-list>
          <mat-divider></mat-divider>
        </div>
        <!-- EXYZT -->
        <div class="experience-item">
          <div class="enterprise-date">
            <div
              [innerHTML]="'resume.experiences.exyzt.title' | translate"
              class="enterprise mat-title"
            ></div>
            <div
              [innerHTML]="'resume.experiences.exyzt.duration' | translate"
              class="date mat-h3"
            ></div>
          </div>
          <mat-list role="list">
            <mat-list-item
              role="listitem"
              [innerHTML]="'resume.experiences.exyzt.job' | translate"
            ></mat-list-item>
          </mat-list>
          <mat-divider></mat-divider>
        </div>
        <!-- Prefecture -->
        <div class="experience-item">
          <div class="enterprise-date">
            <div
              class="enterprise mat-title"
              [innerHTML]="'resume.experiences.prefecture.title' | translate"
            ></div>
            <div
              [innerHTML]="'resume.experiences.prefecture.duration' | translate"
              class="date mat-h3"
            ></div>
          </div>
          <mat-list role="list">
            <mat-list-item
              role="listitem"
              [innerHTML]="'resume.experiences.prefecture.job' | translate"
            ></mat-list-item>
          </mat-list>
        </div>
      </mat-card-content>
    </mat-card>
  `,
})
export class ResumeExperiencesComponent {
  faBriefcase = faBriefcase;
}
