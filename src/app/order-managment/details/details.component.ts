import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CRUDService } from '../../shared/_services/crud.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  LayoutUtilsService,
  MessageType
} from '../../core/_base/crud';

@Component({
  selector: 'kt-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public requestId: number;
  public request;
  public status: string;

  public styles = {
    Pending: 'kt--font-bold kt-font-warning',
    Completed: 'kt--font-bold kt-font-success',
    'chemist-coming': 'kt--font-bold kt-font-warning',
    'delivering-sample': 'kt--font-bold kt-font-info',
    'results-ready': 'kt--font-bold kt-font-success',
    'picking-results': 'kt--font-bold kt-font-info',
    haitus: 'kt--font-bold kt-font-danger',
    blocked: 'kt--font-bold kt-font-danger'
  };

  constructor(
    private _crudService: CRUDService,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRefs: ChangeDetectorRef,
    private modalService: NgbModal,
    private layoutUtilsService: LayoutUtilsService
  ) {}

  ngOnInit() {
    this.requestId = +this.activatedRoute.snapshot.params.id;
    this.fetchRequestDetails();
  }
  fetchRequestDetails() {
    this._crudService
      .getOne('orders', this.requestId, {
        include: [
          {
            relation: 'customer',
            scope: {
              include: [
                {
                  relation: 'address',
                  scope: {
                    include: [
                      { relation: 'area' },
                      { relation: 'city' }
                    ]
                  }
                }
              ]
            }
          },
          {
            relation: 'products',
            scope: {
              include: [
                {
                  relation: 'brand'
                }
              ]
            }
          }
        ]
      })
      .then((res) => {
        this.request = { ...res };
        this.status = this.request.status;
        this._crudService
          .getRelation('orders', this.requestId, 'products')
          .then((result) => {
            this.request.products = this.request.products.map(
              (product, index) => {
                return {
                  ...result[index],
                  ...product
                };
              }
            );
            this.changeDetectorRefs.detectChanges();
          });
      })
      .catch((err) => {
        console.error({ err });
        this.layoutUtilsService.showActionNotification(
          'Sorry, failed to fetch order details.'
        );
      });
  }
  updateOrderState() {
    this._crudService
      .api(
        `/api/orders/${this.requestId}`,
        {
          status: 'Completed',
          delievryDate: new Date()
        },
        'PATCH'
      )
      .then((res) => {
        this.fetchRequestDetails();
        // this.sendPushNotification();
        this.changeDetectorRefs.detectChanges();
        this.layoutUtilsService.showActionNotification(
          'Updated Order.'
        );
      })
      .catch((err) => {
        console.error(err);
        this.layoutUtilsService.showActionNotification(
          'Sorry, failed to update order.'
        );
      });
  }
}
