import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book, UnitedStates, createBook } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  BookURL = "https://restcountries.com/v3.1/all";
  BookURL1 = "https://jsonplaceholder.typicode.com/posts/1/comments";

  BookURL2 = "https://restcountries.com/v3.1/alpha";
  //BookURL2 = "http://universities.hipolabs.com/search?country=United+States";
  url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  url1 = "http://universities.hipolabs.com/search?country=United+States";
  apiUrl= "";
  
  //https://api.publicapis.org/entriess
  constructor(private http: HttpClient) { }

  getBooksFromStorId(id : number): Observable<Book[]> {
    return this.http.get<Book[]>(this.BookURL2+"/"+id);
  }

  // getBooksFromStorIdString(id : number): Observable<Book[]> {
  //   return this.http.get<Book[]>(this.BookURL2+"/"+id);
  // }

  // getBooksFromStorIdString(id: number): Observable<UnitedStates[]> {
  //   return this.http.get<UnitedStates[]>(this.BookURL2 + "/" + id).pipe(
  //     map(response => response as UnitedStates[]) // Adjust as per your API response structure
  //   );
  // }

  // getBooksFromStorIdString(id: number): Observable<UnitedStates[]> {
  //   return this.http.get<UnitedStates[]>(`${this.BookURL2}/${id}`).pipe(
  //     map(response => response as UnitedStates[])
  //   );
  // }

  getBooksFromStorIdString(id: number): Observable<UnitedStates[]> {
    return this.http.get<UnitedStates[]>(`${this.BookURL2}/${id}`).pipe(
      map(response => response as UnitedStates[])
    );
  }

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

  // createBook(book: Book): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/books`, book); // Replace with your actual API endpoint
  // }

  createBook(createbook1: createBook): Observable<any> {
    return this.http.post(`${this.apiUrl}/createbook1`, createbook1);
  }

  getIndicosm(): Observable<createBook[]> {
    return this.http.get<createBook[]>(`${this.apiUrl}`); // Adjust the endpoint based on your API
  }


   exampleFunction<T>(arg: T): T {
    const result: string = this.exampleFunction<string>('Hello'); // Error: Untyped function calls may not accept type arguments
  
    return arg;
  }
  
 
  
}
