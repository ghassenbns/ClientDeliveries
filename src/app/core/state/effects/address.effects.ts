import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, withLatestFrom, filter } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddressApiService } from 'src/app/services/address-api.service';
import * as AddressActions from '../actions/address.actions';
import { AppState } from '../reducers';
import { selectAddresses } from '../selectors/address.selectors';

@Injectable()
export class AddressEffects {
  loadAddresses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddressActions.loadAddresses),
      withLatestFrom(this.store.select(selectAddresses)),
      filter(([action, addresses]) => !addresses.length), 
      // Only trigger if addresses haven't been loaded
      mergeMap(() => this.addressService.getAllAddresses()
        .pipe(
          map(addresses  => AddressActions.loadAddressesSuccess({ addresses })),
          catchError(error => of(AddressActions.loadAddressesFailure({ error })))
        ))
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private addressService: AddressApiService
  ) {}
}
