// import { BaseModel } from '../../_base/crud';

export class Merchant {
  name: string;
  password: string;
  email: string;
  img: string;

  clear(): void {
    this.password = '';
    this.email = '';
    this.name = '';
    this.img = '';
  }
}
