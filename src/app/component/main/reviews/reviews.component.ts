import {Component, Input, OnInit} from '@angular/core';
import {Place, Places} from '../../../model/places';
import {PlacesProviderService} from '../../../service/places-provider.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  @Input() places: Places;

  selectedPlace: Place;

  constructor(private placesProviderService: PlacesProviderService) {
    this.placesProviderService.getChosenPlaceObservable().subscribe(place => this.selectedPlace = place);
  }

  ngOnInit() {
  }

  onLinkClick(index: number) {
    const place = this.places.places[index];
    if (place) {
      this.placesProviderService.setChosenPlace(place);
    }
  }

  selectedIndex() {
    return this.places.places.indexOf(this.selectedPlace);
  }
}
