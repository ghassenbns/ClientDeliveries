import { createAction, props } from '@ngrx/store';
import { Address } from 'src/app/application/models/Address';

export const loadAddresses = createAction('[Address] Load Addresses');
export const loadAddressesSuccess = createAction(
  '[Address] Load Addresses Success',
  props<{ addresses: Address[] }>()
);
export const loadAddressesFailure = createAction(
  '[Address] Load Addresses Failure',
  props<{ error: any }>()
);
