import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  public url: string = '/api/';
  public genericListFlagSubject = new BehaviorSubject(false);
  public forceRefreshValue =
    this.genericListFlagSubject.asObservable();

  constructor(private http: HttpClient) {}
  forwardForceRefresh(flag: boolean) {
    this.genericListFlagSubject.next(flag);
  }

  getData(gate, query): Promise<any> {
    let params = new HttpParams();
    const userToken = localStorage.getItem('x-access-token');
    let header = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + userToken
    );
    let requestUrl = this.url + gate;
    query = {
      filter: JSON.stringify(query)
    };
    for (let index in query) {
      params = params.set(index, query[index]);
    }
    return this.http
      .get(requestUrl, { headers: header, params: params })
      .toPromise();
  }

  getCount(gate, query): Promise<any> {
    let params = new HttpParams();
    const userToken = localStorage.getItem('x-access-token');
    let header = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + userToken
    );
    let requestUrl = this.url + gate + '/count';
    for (let index in query) {
      params = params.set(index, JSON.stringify(query[index]));
    }
    delete query.skip;
    delete query.limit;

    return this.http
      .get(requestUrl, { headers: header, params: params })
      .toPromise();
  }

  getOne(gate, ID, query = {}): Promise<any> {
    let params = new HttpParams();
    let requestUrl = this.url + gate;
    query = {
      filter: JSON.stringify(query)
    };
    for (let index in query) {
      params = params.set(index, query[index]);
    }
    return this.http
      .get(`${requestUrl}/${ID}`, { params: params })
      .toPromise();
  }

  getRelation(gate, ID, relation, query = {}): Promise<any> {
    let params = new HttpParams();
    let requestUrl = this.url + gate;
    query = {
      filter: JSON.stringify(query)
    };
    for (let index in query) {
      params = params.set(index, query[index]);
    }
    return this.http
      .get(`${requestUrl}/${ID}/${relation}`, { params: params })
      .toPromise();
  }

  deleteOne(gate, dataid): Promise<any> {
    const userToken = localStorage.getItem('x-access-token');
    let header = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + userToken
    );
    let params = new HttpParams();
    let requestUrl = this.url + gate;
    return this.http
      .delete(`${requestUrl}/${dataid}`, { headers: header })
      .toPromise();
  }

  deleteData(gate, query): Promise<any> {
    const userToken = localStorage.getItem('x-access-token');
    let header = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + userToken
    );
    let params = new HttpParams();
    let requestUrl = this.url + gate;
    query = {
      where: JSON.stringify(query)
    };
    for (let index in query) {
      params = params.set(index, query[index]);
    }
    return this.http
      .delete(`${requestUrl}`, { headers: header })
      .toPromise();
  }

  addData(uri, data, query = {}): Promise<any> {
    const userToken = localStorage.getItem('x-access-token');
    let header = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + userToken
    );
    let params = new HttpParams();
    let requestUrl = this.url + uri;
    for (let index in query) {
      params = params.set(index, query[index]);
    }
    return this.http
      .post(requestUrl, data, { headers: header })
      .toPromise();
  }

  editData(gate, data, dataid): Promise<any> {
    const userToken = localStorage.getItem('x-access-token');
    let header = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + userToken
    );
    let requestUrl = this.url + gate;
    return this.http
      .patch(`${requestUrl}/${dataid}`, data, {
        headers: header
      })
      .toPromise();
  }

  api(uri, body = {}, method = 'GET', query = {}) {
    let requestPromise;
    switch (method) {
      case 'POST':
        requestPromise = this.http.post(uri, body, {
          params: query
        });
        break;

      case 'GET':
        requestPromise = this.http.get(uri, { params: { ...body } });
        break;

      case 'PATCH':
        requestPromise = this.http.patch(uri, body, {
          params: query
        });
        break;

      case 'PUT':
        requestPromise = this.http.put(uri, body, {
          params: query
        });
        break;

      case 'DELETE':
        requestPromise = this.http.delete(uri, {
          params: {
            ...body
          }
        });
        break;

      default:
        requestPromise = this.http.get(uri, {
          params: { ...body }
        });
        break;
    }
    return requestPromise.toPromise();
  }

  public uploadAttachment(gate: string, file: any, key = 'files') {
    const userToken = localStorage.getItem('x-access-token');
    let header = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + userToken
    );
    let requestUrl = this.url + gate;
    const input = new FormData();
    input.append(key, file, file.name);

    return this.http
      .post(`${requestUrl}/upload`, input, {
        headers: header
      })
      .toPromise();
  }
}
