import { ActionReducerMap } from '@ngrx/store';
import { AddressState, addressReducer } from './address.reducer';

export interface AppState {
  deliveries: AddressState;
}

export const reducers: ActionReducerMap<AppState> = {
  deliveries: addressReducer,
};
