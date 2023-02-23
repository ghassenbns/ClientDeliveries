import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Address } from 'src/app/application/models/Address';
import { pushAddress } from 'src/app/core/state/actions/address.actions';
import { AddressApiService } from 'src/app/services/address-api.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {
  formGroup!: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private addressApiService: AddressApiService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.createForm();
  }

  get f(): any {
    return this.formGroup.controls;
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      address: [null, Validators.required],
      building: [null, Validators.required],
      zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      door: [null, Validators.required],
      stairs: [null, Validators.required],
      province: [null, Validators.required],
      username: [null, Validators.required],
    });
  }

  onSubmit() {
    if (!this.loading) {
      this.loading = true;
      const values = this.formGroup.value;
      const address: Address = {
        address: values.address,
        building: values.building,
        zipcode: values.zipcode,
        door: values.door,
        stairs: values.stairs,
        province: values.province,
        username: values.username,
      };

      this.addressApiService.postAddress(address).subscribe({
        next: (address) => {
          // Request succeeded
          console.log('Address added successfully');
          // Push the created address to store (to avoid reloading data)
          this.store.dispatch(pushAddress({ address }));
          // Redirect to home page
          this.router.navigate(['/']);
        },
        error: (error) => {
          // Request failed
          console.error('Failed to add address:', error);
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}
