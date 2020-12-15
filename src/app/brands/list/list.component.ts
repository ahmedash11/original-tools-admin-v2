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
  public brandsQuery = {};
  public brandsAPI = 'brands';
  public title = 'brands';

  public brandsModel: any = {
    form: {
      endPoint: 'api/brands',
      httpMethod: 'POST',
      groups: [
        {
          title: 'Brand Data',
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

  constructor(
    private modalService: NgbModal,
    private _crudService: CRUDService,
    private layoutUtils: LayoutUtilsService
  ) {}

  ngOnInit() {}
}
