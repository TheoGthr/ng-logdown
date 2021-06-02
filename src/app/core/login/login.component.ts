import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'lgd-login',
  template: `
    <div class="login-card">
      <mat-card *ngIf="auth.user | async as user; else showLogin">
        <mat-card-header>
          <mat-card-title>Hello {{ user.displayName }}!</mat-card-title>
        </mat-card-header>
        <mat-card-content>How are you?</mat-card-content>
        <button mat-raised-button color="primary" (click)="logout()">
          Logout
        </button>
      </mat-card>
    </div>
    <ng-template #showLogin>
      <mat-card>
        <mat-card-header>
          <mat-card-title>Admin Crypto</mat-card-title>
        </mat-card-header>
        <mat-card-content>Please login.</mat-card-content>
        <button mat-raised-button color="primary" (click)="login()">
          Login with Google
        </button>
      </mat-card>
    </ng-template>
  `,
  styles: [
    `
      .login-card {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      mat-card {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AngularFireAuth) {}

  ngOnInit(): void {}

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}
