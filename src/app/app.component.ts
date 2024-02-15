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
  usaData!:Observable<UnitedStates[]>;
  testData!: Observable<TestData[]>;
  dataSource: any;
  constructor(private fb: FormBuilder,private bookservice : BookService) {
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
  }

  onSubmit() {
    
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      // Handle invalid form
    }
  }
  getIndicosBooks(){
    this.bookservice.getBooksFromStor().subscribe(books =>{
      console.log(books);
      this.indicosbook = books
      console.log(this.indicosbook);
      console.log(books.values());      
    })
    this.bookservice.getBooksFromStorId(170).subscribe(books =>{
      console.log(books);  
      this.indicosbook2 = books
      console.log(this.indicosbook2);
      console.log(books.values());    
    });
    this.bookservice.getBooksFromStorAsync().subscribe(data=> {
      console.log(data);     
    })
    this.bookservice.getDataUSAFromStorAsync().subscribe(data=>{
      console.log(data); 
    });
    this.bookservice.testData().subscribe(data=>{console.log(data);
      this.dataSource = new MatTableDataSource<TestData>(data);
    });
  }
  
  getIndicosBooksObservable(){
    this.indicosbook1= this.bookservice.getBooksFromStorAsync();
   // console.log(this.indicosbook1);  
  }

  getUsaDataObservable(){
    this.usaData= this.bookservice.getDataUSAFromStorAsync();
    //console.log(this.usaData);  
  }
  getTestData(){
    this.testData= this.bookservice.testData();
   // console.log(this.testData);
    
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

