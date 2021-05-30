import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Device } from '../models/Device';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  private api = environment.api;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<{ devices: Device[] }> {
    return this.httpClient
      .get<{ devices: Device[] }>(this.api + '/devices/')
      .pipe(catchError(this.errorHandler));
  }

  create(device: Device): Observable<{ created: boolean }> {
    return this.httpClient
      .post<{ created: boolean }>(
        this.api + '/devices/',
        JSON.stringify(device),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(device: Device): Observable<{ removed: boolean }> {
    return this.httpClient
      .delete<{ removed: boolean }>(
        this.api + '/devices/' + device.Id,
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
