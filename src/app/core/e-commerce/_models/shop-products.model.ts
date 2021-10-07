import { BaseModel } from '../../_base/crud';

export class ShopProductsModel extends BaseModel {
  productId: number;
  shopId: number;
  price: number;
  available: boolean;

  clear() {
    this.productId = 0;
    this.shopId = 0;
    this.price = 0;
    this.available = true;
  }
}
