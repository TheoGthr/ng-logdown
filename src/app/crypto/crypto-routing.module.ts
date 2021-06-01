import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CryptoAdminComponent } from './crypto-admin/crypto-admin.component';
import { CryptoComponent } from './crypto.component';

const routes: Routes = [
  {
    path: '',
    component: CryptoComponent,
  },
  {
    path: 'admin',
    component: CryptoAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoRoutingModule {}
