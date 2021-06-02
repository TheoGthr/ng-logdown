import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { canActivate, customClaims } from '@angular/fire/auth-guard';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

const adminOnly = () =>
  pipe(
    customClaims,
    map((claims) => (claims.admin === true ? ['admin'] : ['login']))
  );

const routes: Routes = [
  {
    path: 'crypto',
    loadChildren: () =>
      import('./crypto/crypto.module').then((m) => m.CryptoModule),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    ...canActivate(adminOnly),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [],
})
export class AppRoutingModule {}
