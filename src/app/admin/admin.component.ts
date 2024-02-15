import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, catchError } from 'rxjs';
import { Book, TestData, UnitedStates, createBook } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export default class AdminComponent implements OnInit {
  indicosbook!: Book[];
  indicosbook1!: Observable<Book[]>;
  indicosbook2!: Book[];
  indicosbook3: string[] = [];
  usaData!: Observable<UnitedStates[]>;
  testData!: Observable<TestData[]>;
  dataSource!: createBook[];
  bookForm!: FormGroup;
  datasaved!: boolean;
  //allBooks!: createBook[];
  allBooks!: Observable<Book[]>;
  createbook1!: Observable<createBook[]>; 
  //createBook1: createBook[] = [];
  createBook1!:Observable<createBook[]>;
  http: any;
  apiUrl: any;

  constructor(private fb: FormBuilder, private bookService: BookService) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      id:[null,Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      writer: ['', Validators.required]
    });
    this.getIndicosmBooks();
    this.createBook1 = this.bookService.getIndicosm();
    console.log(this.createBook1);
    
  }

  getIndicosmBooks() {
    this.allBooks = this.bookService.getBooksFromStor();
  }

  // onFormSubmit() {
  //   this.datasaved = false;
   
  //   const book = this.bookForm.value;
  //   this.createBook(book);
  //   this.bookForm.reset();
  // }
  onFormSubmit() {
  this.datasaved = false;

  // Extract the form values
  const bookData = this.bookForm.value;

  // Call the createBook method with the form data
  this.createBook(bookData);

  // Reset the form after submission
  this.bookForm.reset();
}


  // createBook(book: Book) {
  //   this.bookService.this.createBook(book, Book[]).subscribe(book => this.getIndicosm());

  // }
  // createBook(book: Book) {
  //   this.datasaved = false; // Assuming datasaved is of type boolean
  //   book = this.bookForm.value;
  //   this.bookService.createBook(book).subscribe(() => {
  //     this.dataSource = true;
  //     this.getIndicosm();
  //   });
  // }
  
  // getIndicosm() {
    
  // }

  createBook(createbook1: createBook) {
    this.datasaved = false;
    this.bookService.createBook(createbook1).subscribe(() => {
      this.getIndicosm();
    });
  }
  
  getIndicosm() {
    this.bookService.getIndicosm().subscribe((books: createBook[]) => {
      this.dataSource = books; // Assuming dataSource is of type Book[]
      this.datasaved = true;
    });

    
  }


  // createBook(book: any): Observable<any> {
  //   // This is just a placeholder. Modify as needed.
  //   return this.http.post(`${this.apiUrl}/books`, book).pipe(
  //     catchError((error) => {
  //       console.error('Error creating book:', error);
  //       return of(null); // Return an observable with null in case of an error
  //     })
  //   );
  // }

  // getIndicosm(): Observable<any[]> {
  //   // This is just a placeholder. Modify as needed.
  //   return this.http.get<any[]>(`${this.apiUrl}/books`).pipe(
  //     catchError((error) => {
  //       console.error('Error fetching books:', error);
  //       return of([]); // Return an observable with an empty array in case of an error
  //     })
  //   );
  // }
  
  
}

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { MatTableDataSource } from '@angular/material/table';
// import { compileNgModule } from '@angular/compiler';
// import { map } from 'rxjs/operators';
// import { Book, TestData, UnitedStates } from '../book';
// import { BookService } from '../book.service';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit {
//   myForm: any;
//   indicosbook! : Book[] ;
//   indicosbook1!:Observable<Book[]>;
//   indicosbook2!:Book[] ;
//   indicosbook3: string[] = [];
//   usaData!:Observable<UnitedStates[]>;
//   testData!: Observable<TestData[]>;
//   dataSource!: Book[];
//   bookForm!: FormGroup;
//   datasaved!: boolean;
//   allBooks!: Observable<Book[]>;
//   constructor(private fb: FormBuilder,private bookService : BookService) {}
//   ngOnInit(): void {
//     this.bookForm = this.fb.group({
//       name:['',Validators.required],
//      category:['',Validators.required],
//      writer:['',Validators.required]
//     });
//     this.getIndicosm();
//   }
//   getIndicosm() {
//     throw new Error('Method not implemented.');
//   }
  
 
//   onformSubmit(){
//       this.datasaved = false;
//       let book = this.bookForm.value;
//       this.createbook(book :Book[]).subscribe(
//         book => this.getIndicosm(); 
//       )
//   }
//   createbook(book: any, Book: any) {
//     throw new Error('Method not implemented.');
//   }
//   getIndicosmBooks() {
//     this.allBooks = this.bookService.getBooksFromStor()
//   }
// }
