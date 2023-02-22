import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAddresses } from './core/state/actions/address.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClientDeliveries';
  constructor(private store : Store){}
  ngOnInit(){
    this.store.dispatch(loadAddresses());
  }
}
