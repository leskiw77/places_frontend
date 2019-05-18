import { Component, OnInit } from '@angular/core';
import {PlacesProviderService} from '../../service/places-provider.service';
import {Places} from '../../model/places';
import {LocationService} from '../../service/location.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private placesProviderService: PlacesProviderService, private locationService: LocationService) { }

  places: Places = null;

  searchPhase = '';

  ngOnInit() {
    this.placesProviderService.get().subscribe(e => this.places = e);
  }

  search() {
    this.placesProviderService.getAllPlaces(this.searchPhase, this.locationService.getMapCenter());
    console.log();
  }
}
