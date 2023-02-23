import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { addressReducer } from './core/state/reducers/address.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AddressEffects } from './core/state/effects/address.effects';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddressListModule } from './ui/address-list/address-list.module';
import { AddressFormModule } from './ui/address-form/address-form.module';
import { AddressDetailsModule } from './ui/address-details/address-details.module';
import { NotFoundComponent } from './ui/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    StoreModule.forRoot({ deliveries: addressReducer }),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([AddressEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    AddressListModule,
    AddressFormModule,
    AddressDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
