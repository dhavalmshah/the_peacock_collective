import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  readonly BASE_URL = 'address';

  constructor(private http: ApiService) {}

  getAll(payload: any) {
    return this.http.get(this.BASE_URL, payload);
  }
  create(payload: any) {
    return this.http.post(this.BASE_URL, payload).pipe(map((res: any) => res));
  }
  makeDefault(payload: any) {
    return this.http
      .put(this.BASE_URL + '/makeDefault', payload)
      .pipe(map((res: any) => res));
  }
  update(id: any, payload: any) {
    return this.http
      .put(this.BASE_URL + '/' + id, payload)
      .pipe(map((res: any) => res));
  }
  delete(id: any) {
    return this.http
      .delete(this.BASE_URL + '/' + id)
      .pipe(map((res: any) => res));
  }
  getByCustomerId(id: any) {
    return this.http.get(this.BASE_URL + '/byCustomerId/' + id).pipe(map((res: any) => res));
  }
}
