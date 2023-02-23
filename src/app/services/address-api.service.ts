import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError} from 'rxjs';
import { Address } from '../application/models/Address';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { loadAddresses } from '../core/state/actions/address.actions';

@Injectable({
  providedIn: 'root'
})
export class AddressApiService {
  private readonly API_URL = 'https://638889f6a4bb27a7f78a28ad.mockapi.io/api/delivery/';
  private addressList$ = new BehaviorSubject<Address[]>([]);
  addresses = this.addressList$.asObservable();

  constructor(private http: HttpClient, private store : Store) {}

  // Retrieves all the addresses from the API 
  getAllAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.API_URL).pipe(
      map((response: Address[]) => {
        this.addressList$.next(response);
        return response;
      }),
      catchError(this.handleError)
    )
  }

  // Retrieves one address object by id 
  getAddress(id : number): Observable<Address> {
    return this.http.get<Address>(this.API_URL + id).pipe(
      map((response: Address) => {
        return response;
      }),
      catchError((error: any) => throwError(() => error))
    );
  }

  postAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(this.API_URL, address).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message.
    return throwError(()=> 'Something bad happened; please try again later.');
  }
}
