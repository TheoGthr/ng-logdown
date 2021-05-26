import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tgr-sidebar',
  template: `
    <div class="sidebar">
      <div *ngIf="false">
        <img
          mat-card-avatar
          src="/assets/img/resume/profile.jpg"
          alt="profile"
        />
        <div class="lead mat-subheading-1">Lyon · France</div>
        <div class="lead mat-subheading-1">theogauthier13@gmail.com</div>
      </div>
      <div class="sidebar-sticky">
        <div class="sidebar-about">
          <h1 *ngIf="false">Logdown</h1>
          <h1 *ngIf="true">Théo Gauthier</h1>
          <p class="lead">
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
    <!-- Resume -->
    <div class="sidebar">
      <
      <div class="sidebar-sticky">
        <div>
          <div class="sidebar-about"></div>
          <nav class="sidebar-nav">
            <a routerLink="/" class="sidebar-nav-item">{{
              'home.navbar.home-link' | translate
            }}</a>
            <nav-lang></nav-lang>
          </nav>
          <p>
            <small>{{ 'home.navbar.legal' | translate }}</small>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class SidebarComponent implements OnInit {
  constructor(public router: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.router);
  }
}
