import { AdminHomeComponent } from './admin-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';
import { AdminCryptoComponent } from './admin-crypto.component';

@NgModule({
  declarations: [AdminComponent, AdminHomeComponent, AdminCryptoComponent],
  imports: [CommonModule, CoreModule, AdminRoutingModule],
  exports: [],
  providers: [],
})
export class AdminModule {}
