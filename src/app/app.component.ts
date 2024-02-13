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
//       mobileNumber: ['', Validators],
//       comment: [''],
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


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularMaterialDesignInAngular16';
  myForm: any;

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      comment: ['',Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      // Handle invalid form
    }
  }
}

