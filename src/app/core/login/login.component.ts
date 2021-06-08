import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { from } from 'rxjs';

@Component({
  selector: 'lgd-login',
  template: `
    <div class="login-card">
      <mat-card *ngIf="auth.user | async as user; else showLogin">
        <mat-card-header>
          <mat-card-title>Not authorized</mat-card-title>
        </mat-card-header>
        <mat-card-content
          >Sorry, you are not allowed to go to the admin section. This incident
          will be reported.</mat-card-content
        >
        <button mat-raised-button color="primary" (click)="logout()">
          Logout
        </button>
      </mat-card>
    </div>
    <ng-template #showLogin>
      <mat-card>
        <mat-card-header>
          <mat-card-title>Admin Pages</mat-card-title>
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
  constructor(public auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {
    this.auth.authState.subscribe((state) => {
      if (!!state) {
        from(state.getIdTokenResult()).subscribe((token) => {
          if (!!token && token.claims.admin === true) {
            this.router.navigate(['admin']);
          }
        });
      }
    });
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
    this.router.navigate(['home']);
  }
}
