import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { SidebarViews } from '../constants';

@Component({
  selector: 'lgd-admin',
  template: `
    <div class="theme-base-08">
      <lgd-sidebar
        [sidebarView]="sidebarViews.admin"
        [logoutFct]="logout.bind(this)"
      ></lgd-sidebar>
      <div class="content container"></div>
    </div>
  `,
})
export class AdminComponent implements OnInit {
  public sidebarViews = SidebarViews;

  constructor(private auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.signOut();
    this.router.navigate(['home']);
  }
}
