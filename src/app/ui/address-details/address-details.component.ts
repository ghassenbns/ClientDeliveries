import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, tap, Subscription } from 'rxjs';
import { Address } from 'src/app/application/models/Address';
import { AddressApiService } from 'src/app/services/address-api.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent implements OnInit, OnDestroy {
  private addressSub : Subscription = Subscription.EMPTY;
  address$!: Observable<Address>;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private addressApiService: AddressApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.address$ = this.addressApiService.getAddress(+id)
        this.addressSub = this.address$.subscribe({
          error : (error) => {console.error('Error while getting address :', error); this.loading = false},
          complete : () => this.loading = false
        });
      }
      else this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.addressSub.unsubscribe();
  }
}
