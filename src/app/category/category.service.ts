import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from '../models/Category';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private api = environment.api;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<{ ok: boolean; categories: Category[] }> {
    return this.httpClient
      .get<{ ok: boolean; categories: Category[] }>(this.api + '/categories/')
      .pipe(catchError(this.errorHandler));
  }

  create(category: Category): Observable<Category> {
    return this.httpClient
      .post<Category>(
        this.api + '/categories/',
        JSON.stringify(category),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  getById(category: Category): Observable<Category> {
    return this.httpClient
      .get<Category>(this.api + '/categories/' + category.Id)
      .pipe(catchError(this.errorHandler));
  }

  delete(category: Category) {
    return this.httpClient
      .delete<Category>(
        this.api + '/categories/' + category.Id,
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: ErrorEvent) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) errorMessage = error.error.message;
    else errorMessage = `Message: ${error.message}`;
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
