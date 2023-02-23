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
import { AddressFormComponent } from './ui/address-form/address-form.component';
import { AddressDetailsComponent } from './ui/address-details/address-details.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import { AddressListModule } from './ui/address-list/address-list.module';
import { AddressFormModule } from './ui/address-form/address-form.module';

@NgModule({
  declarations: [
    AppComponent,
    AddressDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatToolbarModule,
    StoreModule.forRoot({deliveries : addressReducer}),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([AddressEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    AddressListModule,
    AddressFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
