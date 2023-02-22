import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';
import { AddressState } from '../reducers/address.reducer';

export const selectAddressState = (state: AppState) => state.deliveries;

export const selectAddresses = createSelector(
  selectAddressState,
  (state: AddressState) => state.addresses
);
