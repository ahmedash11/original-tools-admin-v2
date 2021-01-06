import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productsQuery = {};
  public productsAPI = 'products';
  public title = 'products';

  public productsModel: any = {
    form: {
      wrapperKey: 'products',
      // type: 'special',
      endPoint: 'api/products',
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
              name: 'Meta Title',
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
              name: 'Video Url',
              type: 'string',
              gate: 'url'
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
              name: 'Content',
              type: 'textarea',
              gate: 'content'
            },
            {
              name: 'Tech Info',
              type: 'textarea',
              gate: 'techInfo'
            },
            {
              name: 'Addings',
              type: 'textarea',
              gate: 'addings'
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
        key: 'model',
        search: true,
        searchKey: 'model'
      },
      {
        display: 'Title',
        type: 'string',
        key: 'title',
        search: true,
        searchKey: 'title'
      },
      {
        display: 'Price',
        type: 'number',
        key: 'price'
      },
      {
        display: 'Views',
        type: 'number',
        key: 'views'
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
          view: false,
          edit: true
          // custom: {
          //   label: 'Verify',
          //   icon: 'check',
          //   disableKey: 'verified'
          // }
        }
      }
    ]
  };

  constructor() {}
  ngOnInit() {}
}
