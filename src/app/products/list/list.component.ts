import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CRUDService } from '../../shared/_services/crud.service';
import { LayoutUtilsService } from '../../core/_base/crud';
import Swal from 'sweetalert2';

@Component({
  selector: 'kt-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public productsQuery = {};
  public productsAPI = 'products';
  public title = 'products';

  public productsModel: any = {
    form: {
      wrapperKey: 'products',
      type: 'special',
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
              name: 'Description',
              type: 'string',
              gate: 'description',
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
              gate: 'cost',
            },
            {
              name: 'Quantity',
              type: 'number',
              gate: 'quantity',
            },
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
        display: 'Price',
        type: 'number',
        key: 'price',
      },
      {
        display: 'Views',
        type: 'number',
        key: 'views',
      },
      {
        display: 'Quantity',
        type: 'number',
        key: 'quantity',
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

  constructor(
    private modalService: NgbModal,
    private _crudService: CRUDService,
    private layoutUtils: LayoutUtilsService
  ) {}

  ngOnInit() {}
}
