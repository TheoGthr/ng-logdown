import { Component, Input } from '@angular/core';
import { SidebarViews } from 'src/app/constants';

@Component({
  selector: 'lgd-sidebar',
  styleUrls: ['sidebar.component.scss'],
  template: `
    <div class="sidebar">
      <div *ngIf="sidebarView === SidebarViews.resume" id="resume-info">
        <img
          mat-card-avatar
          src="/assets/img/resume/profile.jpg"
          alt="profile"
        />
        <div class="lead mat-subheading-1">Lyon · France</div>
        <div class="lead mat-subheading-1">theo.gauthier@ik.me</div>
      </div>
      <div class="sidebar-sticky">
        <div class="sidebar-about">
          <h1 *ngIf="sidebarView === SidebarViews.default">Logdown</h1>
          <h1 *ngIf="sidebarView === SidebarViews.resume">Théo Gauthier</h1>
          <p *ngIf="sidebarView === SidebarViews.default" class="lead">
            {{ 'home.navbar.description' | translate }}
          </p>
        </div>

        <nav class="sidebar-nav">
          <a class="sidebar-nav-item" routerLink="/">{{
            'home.navbar.home-link' | translate
          }}</a>
          <a class="sidebar-nav-item" routerLink="/resume">{{
            'home.navbar.resume-link' | translate
          }}</a>
          <nav-lang></nav-lang>
        </nav>
        <p>
          <small>{{ 'home.navbar.legal' | translate }}</small>
        </p>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  public SidebarViews = SidebarViews;

  @Input()
  public sidebarView: SidebarViews = SidebarViews.default;
}
