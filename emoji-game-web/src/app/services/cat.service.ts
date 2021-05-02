import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cat from '../model/cat';
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getCats() {
    return this.http.get<CatsContainer>('/api/cats').pipe(
      map(catsObj => catsObj.cats),
      catchError(err => {
        console.log(err)
        return of([])
      })
    )
  }
}

interface CatsContainer {
  cats: Cat[]
}