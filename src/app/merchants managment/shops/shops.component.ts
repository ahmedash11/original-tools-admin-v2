import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  public shopsQuery = { limit: 100 };
  public shopsAPI = 'shops';
  public title = 'shops';

  public shopsModel: any = {
    form: {
      wrapperKey: 'shops',
      endPoint: 'api/shops',
      httpMethod: 'POST',
      groups: [
        {
          title: 'shop Data',
          inputs: [
            {
              name: 'Name',
              type: 'string',
              gate: 'name',
              required: true
            },
            {
              name: 'Description',
              type: 'textarea',
              gate: 'description'
            },

            {
              name: 'Image',
              type: 'file',
              gate: 'img'
            },
            {
              name: 'User',
              type: 'select',
              gate: 'userId',
              required: true,
              apiend: 'users'
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
        display: 'Name',
        type: 'string',
        key: 'name'
      },
      {
        display: 'Actions',
        type: 'array',
        key: '',
        actions: {
          delete: true,
          view: `https://etoolsshop.com/shops/`,
          edit: true
        }
      }
    ]
  };

  ngOnInit() {}
}
