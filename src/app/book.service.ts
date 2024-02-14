import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  BookURL1 = "https://jsonplaceholder.typicode.com/posts/1/comments";
  BookURL =" https://restcountries.com/v3.1/all";
  constructor(private http: HttpClient) { }
  getBooksFromStor(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BookURL);
  }

  getBooksFromStorAsync(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BookURL1);
  }
}
