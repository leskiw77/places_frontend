import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSliderModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './component/main/map/map.component';
import { AgmCoreModule } from '@agm/core';
import {LocationService} from './service/location.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './component/main/main.component';
import { ReviewsComponent } from './component/main/reviews/reviews.component';
import { ReviewTabComponent } from './component/main/reviews/review-tab/review-tab.component';
import {PlacesProviderService} from './service/places-provider.service';
import { ReviewDetailsComponent } from './component/main/reviews/review-details/review-details.component';
import { PhotosComponent } from './component/main/reviews/review-details/photos/photos.component';
import { AddPlaceComponent } from './component/main/map/add-place/add-place.component';
import { RatingsComponent } from './component/main/reviews/review-details/ratings/ratings.component';
import {AddReviewComponent} from './component/main/reviews/review-details/ratings/add-review/add-review.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainComponent,
    ReviewsComponent,
    ReviewTabComponent,
    ReviewDetailsComponent,
    PhotosComponent,
    AddPlaceComponent,
    RatingsComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBz0Z-UwonvSPxBuew54K-9ki-TuDwYA2Q'
    }),
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [LocationService, PlacesProviderService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [AddPlaceComponent, AddReviewComponent]
})
export class AppModule { }
