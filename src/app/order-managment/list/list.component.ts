import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public ordersQuery = {
    order: ['id DESC'],
    where: {
      status: 'Pending'
    }
  };
  public ordersAPI = 'orders';
  public title = 'orders';

  public ordersModel: any = {
    list: [
      {
        display: 'ID',
        type: 'number',
        key: 'id',
        search: true,
        searchKey: 'id'
      },
      {
        display: 'Order Date',
        type: 'date',
        key: 'orderDate'
      },
      {
        display: 'Status',
        type: 'string',
        key: 'status',
        styles: {
          Pending: 'kt--font-bold kt-font-warning',
          completed: 'kt--font-bold kt-font-success',
          reviewed: 'kt--font-bold kt-font-warning',
          rejected: 'kt--font-bold kt-font-danger'
        }
      },
      {
        display: 'Total',
        type: 'number',
        key: 'total'
      },
      {
        display: 'Actions',
        type: 'array',
        key: '',
        actions: {
          delete: false,
          view: '/orders/details/',
          edit: false
          // custom: {
          //   label: 'Verify',
          //   icon: 'check',
          //   disableKey: 'verified'
          // }
        }
      }
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
