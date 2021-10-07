import { BaseModel } from '../../_base/crud';

export class ShopModel extends BaseModel {
  id: number;
  name: string;
  description: string;
  img: string;
  userId: number;
  slug: string;

  clear() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.img = '';
    this.userId = 0;
    this.slug = '';
  }
}
