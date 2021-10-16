import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-shops',
  templateUrl: './products-shop.component.html',
  styleUrls: ['./products-shop.component.scss']
})
export class ShopProductsComponent implements OnInit {
  public shopsQuery = {};
  public shopsProductsAPI = 'product-shops';
  public title = 'ShopsProducts';

  constructor() {}

  ngOnInit() {}

  public shopsProductModel: any = {
    form: {
      wrapperKey: 'products',
      endPoint: 'api/product-shops',
      httpMethod: 'POST',
      groups: [
        {
          title: 'Product Data',
          inputs: [
            {
              name: 'Shop',
              type: 'select',
              gate: 'shopId',
              apiend: 'shops',
              required: true
            },
            {
              name: 'Product',
              type: 'select',
              gate: 'productId',
              required: true,
              apiend: 'products'
            },
            {
              name: 'Discount',
              type: 'number',
              gate: 'discount'
            },
            {
              name: 'Quantity',
              type: 'number',
              gate: 'quantity'
            }
          ]
        }
      ]
    },
    list: [{}]
  };
}
