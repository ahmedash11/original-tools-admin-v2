import { BaseModel } from '../../_base/crud';
import { ProductSpecificationModel } from './product-specification.model';
import { ProductRemarkModel } from './product-remark.model';

export class ShopModel extends BaseModel {
  name: string;
  description: string;
  img: string;
  userId: number;

  clear() {
    this.name = '';
    this.description = '';
    this.img = '';
    this.userId = 0;
  }
}
