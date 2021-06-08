import { Component, Input } from '@angular/core';
import { SidebarViews } from 'src/app/constants';

@Component({
  selector: 'lgd-sidebar',
  styleUrls: ['sidebar.component.scss'],
  template: `
    <div class="sidebar">
      <div *ngIf="sidebarView === sidebarViews.resume" id="resume-info">
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
          <h1 *ngIf="sidebarView === sidebarViews.default">Logdown</h1>
          <h1 *ngIf="sidebarView === sidebarViews.resume">Théo Gauthier</h1>
          <h1 *ngIf="sidebarView === sidebarViews.admin">Admin</h1>
          <p *ngIf="sidebarView === sidebarViews.default" class="lead">
            {{ 'home.navbar.description' | translate }}
          </p>
        </div>

        <nav *ngIf="sidebarView !== sidebarViews.admin" class="sidebar-nav">
          <a class="sidebar-nav-item" routerLink="/">{{
            'home.navbar.home-link' | translate
          }}</a>
          <a class="sidebar-nav-item" routerLink="/resume">{{
            'home.navbar.resume-link' | translate
          }}</a>
          <lgd-nav-lang></lgd-nav-lang>
        </nav>
        <nav *ngIf="sidebarView === sidebarViews.admin">
          <a class="sidebar-nav-item" routerLink="crypto">Pages</a>
        </nav>
        <button
          *ngIf="sidebarView === sidebarViews.admin"
          mat-raised-button
          (click)="logoutFct()"
        >
          Logout
        </button>
        <p>
          <small>{{ 'home.navbar.legal' | translate }}</small>
        </p>
      </div>
    </div>
  `,
})
export class SidebarComponent {
  @Input()
  public sidebarView: SidebarViews = SidebarViews.default;

  @Input()
  public logoutFct: any;

  public sidebarViews = SidebarViews;
}
