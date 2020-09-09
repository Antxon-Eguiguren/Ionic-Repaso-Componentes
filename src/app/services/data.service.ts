import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbums(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getSuperheroes(): Observable<any> {
    return this.http.get('/assets/data/superheroes.json').pipe(delay(2500));
  }
}
