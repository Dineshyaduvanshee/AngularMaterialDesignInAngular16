import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Book, UnitedStates } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  BookURL1 = "https://jsonplaceholder.typicode.com/posts/1/comments";
  BookURL = " https://restcountries.com/v3.1/all";
  url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  url1 = "http://universities.hipolabs.com/search?country=United+States";
  constructor(private http: HttpClient) { }
  getBooksFromStor(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BookURL);
  }

  getBooksFromStorAsync(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BookURL1);
  }
  getDataUSAFromStorAsync(): Observable<UnitedStates[]> {
    return this.http.get<UnitedStates[]>(this.url);
  }
  testData(): Observable<any[]> {
    return this.http.get<any[]>(this.url1);
  }
}
