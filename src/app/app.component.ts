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
import { Book } from './book';
import { BookService } from './book.service';
import { Observable } from 'rxjs';

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
  constructor(private fb: FormBuilder,private bookservice : BookService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      comment: ['', Validators.required],
    });
    this.getIndicosBooks(); 
    this.getIndicosBooksObservable();
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
  }
  getIndicosBooksObservable(){
    // this.bookservice.getBooksFromStorAsync().subscribe(books =>{
      
      
    // })
    this.indicosbook1= this.bookservice.getBooksFromStorAsync();
    console.log(this.indicosbook1);
    
      
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

