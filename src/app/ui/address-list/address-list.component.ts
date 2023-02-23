import { Component, OnDestroy, OnInit } from '@angular/core';
import { Address } from 'src/app/application/models/Address';
import { PaginationService } from 'src/app/services/pagination.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit, OnDestroy {
  private addressesSub : Subscription = Subscription.EMPTY;
  
  addressesPerActivePage : Address[] = [];
  displayedColumns: string[] = [];

  constructor(private paginationService : PaginationService){}

  ngOnInit(): void {
    this.addressesSub = this.paginationService.pagedAddresses.subscribe(
      (addresses)=> {
        if(addresses.length){
          this.displayedColumns = [...Object.keys(addresses[0])];
          this.addressesPerActivePage = addresses;
        }
      });
  }

  ngOnDestroy(): void {
    this.addressesSub.unsubscribe();
  }
}
