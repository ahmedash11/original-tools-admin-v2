import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  public adsQuery = { order: ['order ASC'] };
  public adsAPI = 'ads';
  public title = 'ads';

  public adsModel: any = {
    form: {
      wrapperKey: 'ads',
      // type: 'special',
      endPoint: 'api/ads',
      httpMethod: 'POST',
      groups: [
        {
          title: 'Ads Data',
          inputs: [
            {
              name: 'Title',
              type: 'string',
              gate: 'title',
              required: true
            },
            {
              name: 'Text',
              type: 'string',
              gate: 'text'
            },
            {
              name: 'View Shop Button',
              type: 'boolean',
              gate: 'viewButton'
            },
            {
              name: 'Order',
              type: 'number',
              gate: 'order'
            },
            {
              name: 'Desktop Image',
              type: 'file',
              gate: 'desktopImg'
            },
            {
              name: 'Mobile Image',
              type: 'file',
              gate: 'mobileImg'
            }
          ]
        }
      ]
    },

    list: [
      {
        display: 'Desktop Image',
        type: 'img',
        key: 'desktopImg'
      },
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
        display: 'Mobile Image',
        type: 'img',
        key: 'mobileImg'
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
