import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'lgd-admin',
  template: `<div>
    <div>Welcome to admin!</div>
    <button mat-raised-button (click)="logout()">Logout</button>
  </div>`,
})
export class AdminComponent implements OnInit {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.signOut();
    this.router.navigate(['home']);
  }
}
