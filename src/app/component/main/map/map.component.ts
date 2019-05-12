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

  // initial center position for the map
  lat = 50.057;
  lng = 19.9278;

  constructor(private locationService: LocationService,
              private placesProviderService: PlacesProviderService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }

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

}
