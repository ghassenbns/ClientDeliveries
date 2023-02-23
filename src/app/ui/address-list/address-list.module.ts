import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';  
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddressListComponent } from './address-list.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [AddressListComponent, PaginationComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports : [AddressListComponent]
})
export class AddressListModule { }
