import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  //BookURL = "/api/books";
  BookURL =" https://restcountries.com/v3.1/all";
  constructor(private http: HttpClient) { }
  getBooksFromStor(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BookURL);
  }
}
