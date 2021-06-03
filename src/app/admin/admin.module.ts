import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, CoreModule, AdminRoutingModule],
  exports: [],
  providers: [],
})
export class AdminModule {}
