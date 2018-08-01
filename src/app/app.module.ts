import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,MatButtonModule,MatButtonToggleModule,
  MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule,
  MatExpansionModule,MatGridListModule,MatIconModule,MatInputModule,MatListModule,MatMenuModule,
  MatNativeDateModule,MatPaginatorModule,MatProgressBarModule,MatProgressSpinnerModule,MatRadioModule,
 MatRippleModule,MatSelectModule,MatSidenavModule,MatSliderModule,MatSlideToggleModule,MatSnackBarModule,
  MatSortModule,MatStepperModule,MatTableModule,MatTabsModule,MatToolbarModule,MatTooltipModule,MatTreeModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './Login/login.component';
import {dashboardComponent} from './Dashboard/dashboard.component';
import {  RouterModule } from '@angular/router';
import { myroute } from './router/routing.config';

@NgModule({
  exports: [
    CdkTableModule,CdkTreeModule,MatAutocompleteModule,MatBadgeModule,MatBottomSheetModule,
    MatButtonModule,MatButtonToggleModule,MatCardModule,MatCheckboxModule,MatChipsModule,
    MatStepperModule,MatDatepickerModule,MatDialogModule,MatDividerModule,MatExpansionModule,
  MatGridListModule,MatIconModule,MatInputModule,MatListModule,MatMenuModule,MatNativeDateModule,
    MatPaginatorModule,MatProgressBarModule,MatProgressSpinnerModule,MatRadioModule,
    MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule,MatSnackBarModule,MatSortModule,MatTableModule,
    MatTabsModule, MatToolbarModule,MatTooltipModule,MatTreeModule,
  ]
})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(myroute),
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  entryComponents: [dashboardComponent],
  declarations: [LoginComponent,dashboardComponent],
  bootstrap: [dashboardComponent],
  providers: []
})
export class AppModule {}

//platformBrowserDynamic().bootstrapModule(AppModule);


