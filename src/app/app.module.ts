// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { MatOptionModule } from '@angular/material/core';
// import {MatButtonModule} from '@angular/material/button';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatIconModule} from '@angular/material/icon';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatCardModule} from '@angular/material/card';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatInputModule} from '@angular/material/input';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatChipsModule} from '@angular/material/chips';
// import {MatCommonModule} from '@angular/material/core';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatExpansionModule} from '@angular/material/expansion'
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatListModule} from '@angular/material/list';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatProgressBarModule} from '@angular/material/progress-bar';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatRippleModule} from '@angular/material/core';
// import {MatSelectModule} from '@angular/material/select';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatSliderModule} from '@angular/material/slider';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatSortModule} from '@angular/material/sort';
// import {MatStepperModule} from '@angular/material/stepper';
// import {MatTableModule} from '@angular/material/table';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatTooltipModule} from '@angular/material/tooltip'
// import {MatTreeModule} from '@angular/material/tree';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ReactiveFormsModule } from '@angular/forms';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { TestData } from './testdata';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     NgModule,
//     InMemoryWebApiModule.forRoot(TestData),
//     ReactiveFormsModule,
//     BrowserAnimationsModule,
//     MatDatepickerModule,
//     MatChipsModule,
//     MatCheckboxModule,
//     MatButtonToggleModule,
//     MatCommonModule,
//     MatDialogModule,
//     MatBottomSheetModule,
//     MatDividerModule,
//     MatBadgeModule,
//     MatExpansionModule,
//     MatFormFieldModule,
//     MatAutocompleteModule,
//     MatListModule,
//     MatGridListModule,
//     MatCardModule,
//     MatPaginatorModule,
//     MatRippleModule,
//     MatProgressSpinnerModule,
//     MatSelectModule,
//     MatProgressBarModule,
//     MatSidenavModule,
//     MatSnackBarModule,
//     MatSliderModule,
//     MatInputModule,
//     MatSortModule,
//     MatRadioModule,
//     MatStepperModule,
//     MatTableModule,
//     MatTabsModule,
//     BrowserModule,
//     MatTreeModule,
//     MatMenuModule,
//     MatIconModule,
//     AppRoutingModule,
//     MatSlideToggleModule,
//     MatTooltipModule,
//     MatOptionModule,
//     MatButtonModule,
//     MatToolbarModule,
//     HttpClientModule,
//     MatInputModule,
//     MatCardModule,
//     MatButtonModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
