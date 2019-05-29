import {Component, Input, OnInit} from '@angular/core';
import {Place, Review, ReviewToAdd} from '../../../../../model/places';
import {AddPlaceComponent} from '../../../map/add-place/add-place.component';
import {MatDialog} from '@angular/material';
import {PlacesProviderService} from '../../../../../service/places-provider.service';
import {AddReviewComponent} from './add-review/add-review.component';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  @Input() place: Place;
  constructor(private dialog: MatDialog, private placesProviderService: PlacesProviderService) { }

  ngOnInit() {
  }

  addReview() {
    const dialogRef = this.dialog.open(AddReviewComponent, {width: '400px'});

    dialogRef.afterClosed().subscribe((result: ReviewToAdd) => {
      if (result) {
        this.placesProviderService.addReview(this.place, result);
      }
    });
  }

  getColor(review: Review, index: number): string {
    return index <= review.rating ? 'gold' : '#607d8b';
  }

}
