import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdGuardService } from './services/auth/id-guard.service';
import { AddressDetailsComponent } from './ui/address-details/address-details.component';
import { AddressFormComponent } from './ui/address-form/address-form.component';
import { AddressListComponent } from './ui/address-list/address-list.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AddressListComponent,
  },
  {
    path: 'create',
    component: AddressFormComponent,
  },
  {
    path: ':id',
    component: AddressDetailsComponent,
    canActivate: [IdGuardService],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
