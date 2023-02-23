import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from 'src/app/application/models/Address';
import { AddressApiService } from 'src/app/services/address-api.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent implements OnInit {
  address$!: Observable<Address>;

  constructor(
    private route: ActivatedRoute,
    private addressApiService: AddressApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.address$ = this.addressApiService.getAddress(+id);
      }
    });
  }
}
