import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit {
  public subcategoriesQuery = {
    where: {
      parentId: {
        neq: null
      }
    }
  };
  public subcategoriesAPI = 'categories';
  public title = 'subcategories';

  public subcategoriesModel: any = {
    form: {
      wrapperKey: 'subcategories',
      // type: 'special',
      endPoint: 'api/categories',
      httpMethod: 'POST',
      groups: [
        {
          title: 'Category Data',
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
              name: 'Parent Category',
              type: 'select',
              gate: 'parentId',
              apiend: 'categories',
              required: true
            },
            {
              name: 'Active',
              type: 'boolean',
              gate: 'active'
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
        display: 'Title',
        type: 'string',
        key: 'title',
        search: true,
        searchKey: 'title'
      },
      {
        display: 'Actions',
        type: 'array',
        key: '',
        actions: {
          delete: true,
          view: false,
          edit: true
        }
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
