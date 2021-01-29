import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categoriesQuery = {
    where: {
      parentId: {
        eq: null
      }
    }
  };
  public categoriesAPI = 'categories';
  public title = 'categories';

  public categoriesModel: any = {
    form: {
      wrapperKey: 'categories',
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
              name: 'Section',
              type: 'select',
              gate: 'sectionId',
              apiend: 'sections'
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
