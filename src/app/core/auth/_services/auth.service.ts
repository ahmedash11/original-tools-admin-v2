import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { User } from '../_models/user.model';
import { Merchant } from '../_models/merchant.model';
import { Permission } from '../_models/permission.model';
import { Role } from '../_models/role.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {
  QueryParamsModel,
  QueryResultsModel
} from '../../_base/crud';
import { Router } from '@angular/router';
import moment from 'moment';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

const API_USERS_URL = 'api/users';
const API_PERMISSION_URL = 'api/permissions';
const API_ROLES_URL = 'api/roles';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
  // Authentication/Authorization
  login(email: string, password: string) {
    return this.http
      .post<User>('/api/login', { email, password })
      .do((res) => this.setSession);
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem(
      'expires_at',
      JSON.stringify(expiresAt.valueOf())
    );
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getUserByToken(): Observable<User> {
    const userToken = localStorage.getItem('x-access-token');
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Authorization', 'Bearer ' + userToken);
    return this.http.get<any>(API_USERS_URL, {
      headers: httpHeaders
    });
  }

  register(merchant: Merchant): Promise<any> {
    const userToken = localStorage.getItem('x-access-token');
    let header = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + userToken
    );
    const body = JSON.stringify(merchant);

    return this.http
      .post<Merchant>(API_USERS_URL + '/sign-up/merchant', merchant, {
        headers: header
      })
      .toPromise()
      .then((merchant) => JSON.stringify(merchant))
      .catch((err) => console.log(err));
    // .catch(catchError(this.errorHandler))
  }

  /*
   * Submit forgot password request
   *
   * @param {string} email
   * @returns {Observable<any>}
   */
  public requestPassword(email: string): Observable<any> {
    return this.http
      .get(API_USERS_URL + '/forgot?=' + email)
      .pipe(catchError(this.handleError('forgot-password', [])));
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_USERS_URL);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(API_USERS_URL + `/${userId}`);
  }

  // DELETE => delete the user from the server
  deleteUser(userId: number) {
    const url = `${API_USERS_URL}/${userId}`;
    return this.http.delete(url);
  }

  // UPDATE => PUT: update the user on the server
  updateUser(_user: User): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.put(API_USERS_URL, _user, {
      headers: httpHeaders
    });
  }

  // CREATE =>  POST: add a new user to the server
  createUser(user: User): Observable<User> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<User>(API_USERS_URL, user, {
      headers: httpHeaders
    });
  }

  // Method from server should return QueryResultsModel(items: any[], totalsCount: number)
  // items => filtered/sorted result
  findUsers(
    queryParams: QueryParamsModel
  ): Observable<QueryResultsModel> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<QueryResultsModel>(
      API_USERS_URL + '/findUsers',
      queryParams,
      { headers: httpHeaders }
    );
  }

  // Permission
  getAllPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>(API_PERMISSION_URL);
  }

  getRolePermissions(roleId: number): Observable<Permission[]> {
    return this.http.get<Permission[]>(
      API_PERMISSION_URL + '/getRolePermission?=' + roleId
    );
  }

  // Roles
  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(API_ROLES_URL);
  }

  getRoleById(roleId: number): Observable<Role> {
    return this.http.get<Role>(API_ROLES_URL + `/${roleId}`);
  }

  // CREATE =>  POST: add a new role to the server
  createRole(role: Role): Observable<Role> {
    // Note: Add headers if needed (tokens/bearer)
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<Role>(API_ROLES_URL, role, {
      headers: httpHeaders
    });
  }

  // UPDATE => PUT: update the role on the server
  updateRole(role: Role): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.put(API_ROLES_URL, role, {
      headers: httpHeaders
    });
  }

  // DELETE => delete the role from the server
  deleteRole(roleId: number): Observable<Role> {
    const url = `${API_ROLES_URL}/${roleId}`;
    return this.http.delete<Role>(url);
  }

  // Check Role Before deletion
  isRoleAssignedToUsers(roleId: number): Observable<boolean> {
    return this.http.get<boolean>(
      API_ROLES_URL + '/checkIsRollAssignedToUser?roleId=' + roleId
    );
  }

  findRoles(
    queryParams: QueryParamsModel
  ): Observable<QueryResultsModel> {
    // This code imitates server calls
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    return this.http.post<QueryResultsModel>(
      API_ROLES_URL + '/findRoles',
      queryParams,
      { headers: httpHeaders }
    );
  }

  /*
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}
