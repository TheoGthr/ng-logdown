import { AdminEditorComponent } from './admin-editor/admin-editor.component';
import { AdminHomeComponent } from './admin-home.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { canActivate, customClaims } from '@angular/fire/auth-guard';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { NotFoundComponent } from '../core/not-found/not-found.component';

export const redirectAnonymousTo = (redirect: any[]) =>
  pipe(
    customClaims,
    map((claims) => (!!claims && claims.admin === true) || redirect)
  );

const redirectUnauthorizedToLogin = () => redirectAnonymousTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    ...canActivate(redirectUnauthorizedToLogin),
    children: [
      {
        path: '',
        component: AdminHomeComponent,
      },
      {
        path: 'pages',
        component: AdminPagesComponent,
      },
      {
        path: 'edit',
        component: AdminEditorComponent,
      },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
