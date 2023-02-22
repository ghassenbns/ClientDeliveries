import { createReducer, on } from '@ngrx/store';
import { Address } from 'src/app/application/models/Address';
import * as AddressActions from '../actions/address.actions';

export interface AddressState {
  addresses: Address[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: AddressState = {
  addresses: [],
  loading: false,
  loaded: false,
  error: null,
};

export const addressReducer = createReducer(
  initialState,
  on(AddressActions.loadAddresses, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(AddressActions.loadAddressesSuccess, (state, { addresses }) => ({
    ...state,
    addresses,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(AddressActions.loadAddressesFailure, (state, { error }) => ({
    ...state,
    addresses: [],
    loading: false,
    loaded: true,
    error,
  }))
);
