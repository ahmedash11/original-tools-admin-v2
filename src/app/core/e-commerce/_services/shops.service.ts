import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// RxJS
import { BehaviorSubject } from 'rxjs';
// CRUD
import { HttpUtilsService } from '../../_base/crud';
// Models
import { ShopModel } from '../_models/shop.model';

const API_SHOP_URL = 'api/shops';
const API_PRODUCTS_URL = 'api/productsList';

@Injectable()
export class ShopsService {
  constructor(
    private http: HttpClient,
    private httpUtils: HttpUtilsService
  ) {}

  private apiData = new BehaviorSubject<any>(null);
  public apiData$ = this.apiData.asObservable();

  // CREATE =>  POST: add a new shop to the server
  createShop(shop: ShopModel): Promise<any> {
    const userToken = localStorage.getItem('x-access-token');
    let header = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + userToken
    );
    return this.http
      .post<ShopModel>(API_SHOP_URL + shop, {
        headers: header
      })
      .toPromise()
      .then((shop) => JSON.stringify(shop))
      .catch((err) => console.log(err));
  }
}
