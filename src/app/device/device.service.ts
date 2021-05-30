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

  getAll(): Observable<{ ok: boolean; devices: Device[] }> {
    return this.httpClient
      .get<{ ok: boolean; devices: Device[] }>(this.api + '/devices/')
      .pipe(catchError(this.errorHandler));
  }

  create(device: Device): Observable<Device> {
    return this.httpClient
      .post<Device>(
        this.api + '/devices/',
        JSON.stringify(device),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  getById(device: Device): Observable<Device> {
    return this.httpClient
      .get<Device>(this.api + '/devices/' + device.Id)
      .pipe(catchError(this.errorHandler));
  }

  delete(device: Device) {
    return this.httpClient
      .delete<Device>(this.api + '/devices/' + device.Id, this.httpOptions)
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
