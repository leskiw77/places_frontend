import {Component, Input, OnInit} from '@angular/core';
import {LocationService} from '../../../service/location.service';
import {Geo, Place, Places} from '../../../model/places';
import {PlacesProviderService} from '../../../service/places-provider.service';
import {MatDialog} from '@angular/material';
import {AddPlaceComponent} from './add-place/add-place.component';

interface DialogOutput {
  name: string;
  description: string;
  category: string;
  phone: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

  @Input() places: Places;

  selectedPlace: Place;

  zoom = 14;

  constructor(private locationService: LocationService,
              private placesProviderService: PlacesProviderService,
              private dialog: MatDialog) {
  }

  getLatitude() {
    return this.selectedPlace ? this.selectedPlace.geo.lat : this.locationService.getLatitude();
  }

  getLongitude() {
    return this.selectedPlace ? this.selectedPlace.geo.lng : this.locationService.getLongitude();
  }

  ngOnInit() {
    this.placesProviderService.getChosenPlaceObservable().subscribe(place => this.selectedPlace = place);
  }

  markerClicked(place: Place) {
    this.placesProviderService.setChosenPlace(place);
  }


  addPlace($event) {
    const geo = $event.coords as Geo;
    const dialogRef = this.dialog.open(AddPlaceComponent, {width: '400px'});

    dialogRef.afterClosed().subscribe((result: DialogOutput) => {
      if (result) {
        this.placesProviderService.addPlace({...result, geo});
      }
    });
  }

  centerChange($event: Geo) {
    this.locationService.setMapCenter($event);
  }
}
