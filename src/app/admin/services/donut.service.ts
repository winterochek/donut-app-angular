import { Injectable } from '@angular/core';
import { Donut } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, tap } from 'rxjs';

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
        tap(donuts => this.donuts = donuts)
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

  create(donut: Donut): void {
    const id = this.donuts.length;
    donut.id = String(id);
    this.donuts.push(donut);
  }

  update(donut: Donut): void {
    this.donuts = this.donuts.map(item => item.id === donut.id ? donut : item);
  }

  delete(id: string): void {
    this.donuts = this.donuts.filter(item => item.id !== id);
  }
}
