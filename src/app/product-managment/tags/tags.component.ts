import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  public tagsQuery = {};
  public tagsAPI = 'tags';
  public title = 'tags';

  public tagsModel: any = {
    form: {
      wrapperKey: 'tags',
      // type: 'special',
      endPoint: 'api/tags',
      httpMethod: 'POST',
      groups: [
        {
          title: 'Tag Data',
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
              name: 'Slug',
              type: 'string',
              gate: 'slug'
            },
            {
              name: 'Active',
              type: 'boolean',
              gate: 'active'
            },
            {
              name: 'Meta Description',
              type: 'textarea',
              gate: 'metaDescription'
            }
          ]
        }
      ]
    },

    list: [
      {
        display: 'ID',
        type: 'number',
        key: 'id',
        search: true,
        searchKey: 'id'
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
