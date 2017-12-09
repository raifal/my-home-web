import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Light}from './light';
import {LIGHTS}from './mock-lights';

import { MessageService } from './message.service';

@Injectable()
export class LightService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private lightsUrl = '/hsm/lights';
  private lightUrl = '/hsm/light';

  getLights (): Observable<Light[]> {
    return this.http.get<Light[]>(this.lightsUrl)
      .pipe(
        tap(lights => this.log(`fetched lights`)),
        catchError(this.handleError('getLights', []))
      );
  }

  getLight(id: number): Observable<Light> {
    const url = `${this.lightUrl}/${id}`;
    return this.http.get<Light>(url).pipe(
        tap(_ => this.log(`fetched light id=${id}`)),
        catchError(this.handleError<Light>(`getLight id=${id}`))
      );
  }

  /** Log a LightService message with the MessageService */
  private log(message: string) {
    this.messageService.add('LightService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
