import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError} from 'rxjs';
import { Address } from '../application/models/Address';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { loadAddresses } from '../core/state/actions/address.actions';

@Injectable({
  providedIn: 'root'
})
export class AddressApiService {
  private readonly API_URL = 'https://638889f6a4bb27a7f78a28ad.mockapi.io/api/delivery/';
  private addressListSubject = new BehaviorSubject<Address[]>([]);
  addresses$ = this.addressListSubject.asObservable();

  constructor(private http: HttpClient, private store : Store) {}

  getAllAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.API_URL)
  }

  getAddress(id : number): Observable<Address> {
    return this.http.get<Address>(this.API_URL + id).pipe(
      map((response: Address) => {
        console.log(response);
        return response;
      }),
      catchError((error: any) => throwError(() => error))
    );
  }
}
