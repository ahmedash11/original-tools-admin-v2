import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  public sectionsQuery = { order: ['order ASC'] };
  public sectionsAPI = 'sections';
  public title = 'sections';

  public sectionsModel: any = {
    form: {
      wrapperKey: 'sections',
      // type: 'special',
      endPoint: 'api/sections',
      httpMethod: 'POST',
      groups: [
        {
          title: 'Sections Data',
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
              name: 'Order',
              type: 'number',
              gate: 'order'
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
        display: 'Title',
        type: 'string',
        key: 'title'
      },
      {
        display: 'Order',
        type: 'number',
        key: 'order'
      },
      {
        display: 'Active',
        type: 'boolean',
        key: 'active'
      },
      {
        display: 'Actions',
        type: 'array',
        key: '',
        actions: {
          delete: true,
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
