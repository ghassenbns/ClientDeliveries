import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, BehaviorSubject  } from 'rxjs';
import { catchError, map, withLatestFrom } from 'rxjs/operators';
import { Address } from '../application/models/Address';
import { AppState } from '../core/state/reducers';
import { selectAddresses } from '../core/state/selectors/address.selectors';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private readonly pageSize = 10;  
  private pagedAddresses$ = new BehaviorSubject<Address[]>([]);
  private activePage$ = new BehaviorSubject<number>(1);
  private totalPages$ = new BehaviorSubject<number>(1);
  public pagedAddresses = this.pagedAddresses$.asObservable();
  public activePage = this.activePage$.asObservable();
  public totalPages = this.totalPages$.asObservable();

  constructor(private store: Store<AppState>) {
    // Retrieve page content when active page change and sets the pagedAddresses value
    this.activePage$.subscribe(activePage => {
      this.getAddresses(activePage).subscribe(
        (results)=> this.pagedAddresses$.next(results)
        );
    });
   }

  private getAddresses(page: number): Observable<Address[]> {
    return this.store.select(selectAddresses).pipe(
      // Only retrieve the data from the store if it hasn't been loaded yet
      withLatestFrom(this.store.select(state => state.deliveries.loaded)),
      map(([addresses, loaded]) => {
        if (!loaded) {
          return [];
        }
        // Sets the number of pages based on addresses lenght
        this.totalPages$.next(Math.ceil(addresses.length / this.pageSize))
        // Paginate the addresses based on the page number
        return addresses.slice((page - 1) * this.pageSize, page * this.pageSize);
      }),
      catchError(error => {
        console.error(error);
        // Return an empty array if there was an error
        return of([]);
      })
    );
  }

  setActivePage(page : number){
    return this.activePage$.next(page);
  }

}
