import { Component, OnInit } from '@angular/core';
import {PlacesProviderService} from '../../service/places-provider.service';
import {Places} from '../../model/places';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private placesProviderService: PlacesProviderService) { }

  places: Places = null;

  searchPhase = '';

  ngOnInit() {
    this.placesProviderService.get().subscribe(e => this.places = e);
  }

  search() {
    console.log(this.searchPhase);
  }
}
