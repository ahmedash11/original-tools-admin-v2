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
    form: {
      wrapperKey: 'shops',
      endPoint: 'api/shopproducts',
      httpMethod: 'POST',
      groups: [
        {
          title: 'Product Data',
          inputs: [
            {
              name: 'Title',
              type: 'string',
              gate: 'title',
              required: true
            },
            {
              name: 'Description',
              type: 'string',
              gate: 'metaTitle'
            },
            {
              name: 'Brand',
              type: 'select',
              gate: 'brandId',
              required: true,
              apiend: 'brands'
            },
            {
              name: 'Category',
              type: 'select',
              gate: 'categoryId',
              required: true,
              apiend: 'categories'
            },
            {
              name: 'Model',
              type: 'string',
              gate: 'model',
              required: true
            },
            {
              name: 'Avaliable',
              type: 'boolean',
              gate: 'available'
            },
            {
              name: 'Active',
              type: 'boolean',
              gate: 'active'
            },
            {
              name: 'Price',
              type: 'number',
              gate: 'price',
              required: true
            },
            {
              name: 'Cost',
              type: 'number',
              gate: 'cost'
            },
            {
              name: 'Quantity',
              type: 'number',
              gate: 'quantity'
            },
            {
              name: 'Description',
              type: 'textarea',
              gate: 'description'
            },
            {
              name: 'Meta Description',
              type: 'textarea',
              gate: 'metaDescription'
            },
            {
              name: 'Image',
              type: 'file',
              gate: 'img'
            }
          ]
        }
      ]
    },

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
        display: 'Quantity',
        type: 'number',
        key: 'quantity'
      },
      {
        display: 'Actions',
        type: 'array',
        key: '',
        actions: {
          delete: true,
          // view: 'https://etoolsshop.com/shop/products/',
          edit: true
        }
      }
    ]
  };
}
