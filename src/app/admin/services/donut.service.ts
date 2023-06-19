import { Injectable } from '@angular/core';
import { Donut } from '../models';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, catchError, delay, map, of, retryWhen, take, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = []
  constructor(private http: HttpClient) { }

  getAll(): Observable<Donut[]> {
    if (this.donuts.length) return of(this.donuts)

    return this.http
      .get<Donut[]>(`http://localhost:3000/donuts`)
      .pipe(
        tap(donuts => this.donuts = donuts),
        retryWhen((errors) => errors.pipe(delay(500), take(2))),
        catchError(this.handleError)
      )
  }

  getOneById(id: string) {
    return this.getAll().pipe(
      map(donuts => {
        const donut = donuts.find(item => item.id === id);
        return donut ?? null
      })
    )
  }

  create(payload: Donut) {
    return this.http
      .post<Donut>(`http://localhost:3000/donuts`, payload, {})
      .pipe(
        tap(created => this.donuts.push(created)),
        catchError(this.handleError)
      )
  }

  update(payload: Donut) {
    return this.http
      .put<Donut>(`http://localhost:3000/donuts/${payload.id}`, payload)
      .pipe(
        tap(updated => this.donuts = this.donuts.map(item => item.id === updated.id ? updated : item)),
        catchError(this.handleError)
      )
  }


  delete(id: string) {
    return this.http
      .delete<string>(`http://localhost:3000/donuts/${id}`)
      .pipe(
        tap(() => this.donuts = this.donuts.filter(item => item.id !== id)),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // client-side
      console.log('Client error', error.message)

    } else {
      // server-side
      console.log('Server error', error.status)
    }
    return throwError(() => new Error(error.message))
  }
}
