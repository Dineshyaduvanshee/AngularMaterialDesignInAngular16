// // import { HttpClient } from '@angular/common/http';
// // import { Component, OnInit } from '@angular/core';
// // import { FormBuilder, Validators } from '@angular/forms';

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.css']
// // })
// // export class AppComponent implements OnInit{
// //   title = 'AngularMaterialDesignInAngular16';
// //   myForm:any;
  
// //   constructor(private http:HttpClient,private fb :FormBuilder) { }
// //   ngOnInit(): void {
// //     this.myForm = this.fb.group({
// //       firstName: ['', Validators.required],
// //       lastName: ['', Validators.required],
// //       comment: [''],
// //     });
// //   }
// //   printData(){
// //     console.log(this.myForm);
    
// //   }
// //   onSubmit() {
// //     if (this.myForm.valid) {
// //       // Form is valid, handle submission logic
// //       console.log(this.myForm.value);
// //     } else {
// //       // Form is invalid, display error messages
// //       // Or perform other actions as needed
// //     }
// //   }
  
// // }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Book, TestData, UnitedStates } from './book';
import { BookService } from './book.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { compileNgModule } from '@angular/compiler';
import { map } from 'rxjs/operators';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'AngularMaterialDesignInAngular16';
  myForm: any;
  indicosbook! : Book[] ;
  indicosbook1!:Observable<Book[]>;
  indicosbook2!:Book[] ;
  indicosbook3: string[] = [];
  usaData!:Observable<UnitedStates[]>;
  testData!: Observable<TestData[]>;
  dataSource: any;
  constructor(private fb: FormBuilder,private bookService : BookService) {
   // this.dataSource = new MatTableDataSource<TestData>();
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      comment: ['', Validators.required],
    });
    this.getIndicosBooks(); 
    this.getIndicosBooksObservable();
    this.getUsaDataObservable();
    this.getTestData();
    this.getBooks();
  }

  onSubmit() {
    
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      // Handle invalid form
    }
  }
  getIndicosBooks(){
    this.bookService.getBooksFromStor().subscribe(books =>{
      console.log(books);
      this.indicosbook = books
      console.log(this.indicosbook);
      console.log(books.values());      
    })
    this.bookService.getBooksFromStorId(170).subscribe(books =>{
      console.log(books);  
      this.indicosbook2 = books
      console.log(this.indicosbook2);
      console.log(books.values());    
    });
    this.bookService.getBooksFromStorAsync().subscribe(data=> {
      console.log(data);     
    })
    this.bookService.getDataUSAFromStorAsync().subscribe(data=>{
      console.log(data); 
    });
    this.bookService.testData().subscribe(data=>{console.log(data);
      this.dataSource = new MatTableDataSource<TestData>(data);
    });
  }
  
  getIndicosBooksObservable(){
    this.indicosbook1= this.bookService.getBooksFromStorAsync();
   // console.log(this.indicosbook1);  
  }

  getUsaDataObservable(){
    this.usaData= this.bookService.getDataUSAFromStorAsync();
    //console.log(this.usaData);  
  }
  getTestData(){
    this.testData= this.bookService.testData();
   // console.log(this.testData);
    
  }
  // getBooks() {
  //   this.bookservice.getBooksFromStorIdString(170).subscribe(books => {
  //     this.indicosbook3 = books.map(book => book.languages);
  //   });
  // }

  // getBooks() {
  //   this.bookservice.getBooksFromStorIdString(170).subscribe(countries => {
  //     this.indicosbook3 = countries.map(country => country.name);
  //   });
  // }

  // getBooks() {
  //   this.bookservice.getBooksFromStorIdString(170)
  //     .pipe(
  //       map((unitedStates: UnitedStates<Observable>[]) => unitedStates.map(book => book.name))
  //     )
  //     .subscribe((areas: string[]) => {
  //       this.indicosbook3 = areas;
  //     });
  // }
  
  // getBooks() {
  //   this.bookservice.getBooksFromStorIdString(170)
  //     .pipe(
  //       map((unitedStates: UnitedStates[]) => unitedStates.map(book => book.data[0]))
  //     )
  //     .subscribe((firstDataElements: string[]) => {
  //       this.indicosbook3 = firstDataElements;
  //     });
  // }

  // getBooks() {
  //   this.bookservice.getBooksFromStorIdString(170)
  //     .pipe(
  //       map((unitedStates: UnitedStates[]) => unitedStates.map(book => book.data[0]))
  //     )
  //     .subscribe((firstDataElements: string[]) => {
  //       this.indicosbook3 = firstDataElements;
  //     });
  // }

  // getBooks() {
  //   this.bookService.getBooksFromStorIdString(170)
  //     .pipe(
  //       map((unitedStates: UnitedStates[]) => unitedStates.map(book => book.data[0]))
  //     )
  //     .subscribe({
  //       next: (firstDataElements: string[]) => {
  //         this.indicosbook3 = firstDataElements;
  //       },
  //       error: (error) => {
  //         console.error('Error:', error);
  //       },
  //       complete: () => {
  //         console.log('Subscription completed');
  //       }
  //     });
  // }

  getBooks() {
    this.bookService.getBooksFromStorIdString(170)
      .pipe(
        map((unitedStates: UnitedStates[]) => unitedStates.map(item => item.data[0].Nation))
      )
      .subscribe({
        next: (firstDataElements: string[]) => {
          this.indicosbook3 = firstDataElements;
        },
        error: (error) => {
          console.error('Error:', error);
        },
        complete: () => {
          console.log('Subscription completed');
        }
      });
  }

}


// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'AngularMaterialDesignInAngular16';
//   myForm: any;

//   constructor(private http: HttpClient, private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.myForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       mobileNumber: ['', Validators.required],
//       comment: ['',Validators.required],
//     });
//   }

//   onSubmit() {
//     if (this.myForm.valid) {
//       console.log(this.myForm.value);
//     } else {
//       // Handle invalid form
//     }
//   }
// }

