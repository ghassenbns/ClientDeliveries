import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IdGuardService {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = route.paramMap.get('id');
    if (id === null || isNaN(+id)) {
      console.error('Invalid Parameter passed to URL ');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
