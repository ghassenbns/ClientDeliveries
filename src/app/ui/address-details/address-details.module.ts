import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressDetailsComponent } from './address-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AddressDetailsComponent],
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  exports: [AddressDetailsComponent],
})
export class AddressDetailsModule {}
