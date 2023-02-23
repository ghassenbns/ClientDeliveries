import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressDetailsComponent } from './address-details.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AddressDetailsComponent],
  imports: [CommonModule, MatCardModule],
  exports: [AddressDetailsComponent],
})
export class AddressDetailsModule {}
