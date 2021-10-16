import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-shops',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopsProductsComponent implements OnInit {
  public shopsQuery = {};
  public shopsAPI = 'shopproducts';
  public title = 'shops';

  constructor() {}

  ngOnInit() {}

  public shopsProductModel: any = {
    list: [
      {
        display: 'Image',
        type: 'img',
        key: 'img'
      },
      {
        display: 'Model',
        type: 'string',
        key: 'model'
      },
      {
        display: 'Title',
        type: 'string',
        key: 'title'
      },
      {
        display: 'price',
        type: 'number',
        key: 'price'
      },
      {
        display: 'Actions',
        type: 'array',
        key: '',
        actions: {
          delete: true
          // view: 'https://etoolsshop.com/shop/products/',
          // edit: true
        }
      }
    ]
  };
}
