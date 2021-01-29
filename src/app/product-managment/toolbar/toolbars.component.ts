import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-toolbars',
  templateUrl: './toolbars.component.html',
  styleUrls: ['./toolbars.component.scss']
})
export class ToolbarComponent implements OnInit {
  public toolbarsQuery = { order: ['order ASC'] };
  public toolbarsAPI = 'toolbars';
  public title = 'toolbars';

  public toolbarsModel: any = {
    form: {
      wrapperKey: 'toolbars',
      // type: 'special',
      endPoint: 'api/toolbars',
      httpMethod: 'POST',
      groups: [
        {
          title: 'Toolbar Data',
          inputs: [
            {
              name: 'Title',
              type: 'string',
              gate: 'title',
              required: true
            },
            {
              name: 'Order',
              type: 'number',
              gate: 'order'
            },
            {
              name: 'Link',
              type: 'string',
              gate: 'link'
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
        display: 'Link',
        type: 'string',
        key: 'link'
      },
      {
        display: 'Actions',
        type: 'array',
        key: '',
        actions: {
          delete: true,
          // view: 'https://etoolsshop.com/shop/products/',
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
