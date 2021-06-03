import { AdminEditorComponent } from './admin-editor/admin-editor.component';
import { AdminHomeComponent } from './admin-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';
import { AdminCryptoComponent } from './admin-crypto/admin-crypto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminEditorComponent,
    AdminCryptoComponent,
  ],
  imports: [CommonModule, CoreModule, AdminRoutingModule, FormsModule],
  exports: [],
  providers: [],
})
export class AdminModule {}
