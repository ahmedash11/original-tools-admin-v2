import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.scss']
})
export class RequestsListComponent implements OnInit {
  public requestsQuery = {
    order: ['id DESC'],
    include: [
      {
        relation: 'product'
      }
    ]
  };
  public requestAPI = 'requests';
  public title = 'requests';

  public requestsModel: any = {
    list: [
      {
        display: 'ID',
        type: 'number',
        key: 'id',
        search: true,
        searchKey: 'id'
      },
      {
        display: 'Customer Name',
        type: 'string',
        key: 'name',
        search: true,
        searchKey: 'name'
        // objKey: 'customer'
      },
      {
        display: 'Customer Mobile',
        type: 'string',
        key: 'mobile'
        // objKey: 'customer'
      },
      {
        display: 'Customer Address',
        type: 'string',
        key: 'address'
        // objKey: 'customer'
      },
      {
        display: 'Product Title',
        type: 'obj',
        key: 'title',
        objKey: 'product'
      },
      {
        display: 'Product Model',
        type: 'obj',
        key: 'model',
        objKey: 'product'
      },
      {
        display: 'Product Image',
        type: 'obj',
        key: 'img',
        objKey: 'product',
        objType: 'img'
      }

      // {
      //   display: 'Status',
      //   type: 'string',
      //   key: 'status',
      //   styles: {
      //     Pending: 'kt--font-bold kt-font-warning',
      //     Completed: 'kt--font-bold kt-font-success',
      //     reviewed: 'kt--font-bold kt-font-warning',
      //     rejected: 'kt--font-bold kt-font-danger'
      //   }
      // },
      // {
      //   display: 'Total',
      //   type: 'number',
      //   key: 'total'
      // },
      // {
      //   display: 'Actions',
      //   type: 'array',
      //   key: '',
      //   actions: {
      //     delete: false,
      //     view: '/orders/details',
      //     edit: false
      //     // custom: {
      //     //   label: 'Verify',
      //     //   icon: 'check',
      //     //   disableKey: 'verified'
      //     // }
      //   }
      // }
    ]
    // filters: [
    //   {
    //     label: 'Status',
    //     options: [
    //       { label: 'Pending', value: 'pending' },
    //       { label: 'Reviewed', value: 'reviewed' },
    //       { label: 'Rejected', value: 'rejected' },
    //       { label: 'Completed', value: 'completed' }
    //     ],
    //     queryParam: 'status'
    //   }
    // ],
  };
  constructor() {}

  ngOnInit() {}
}
