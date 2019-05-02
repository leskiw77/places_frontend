import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../../../model/places';
import {PlacesProviderService} from '../../../../service/places-provider.service';

@Component({
  selector: 'app-review-tab',
  templateUrl: './review-tab.component.html',
  styleUrls: ['./review-tab.component.scss']
})
export class ReviewTabComponent {

  @Input() place: Place;

  constructor() {
  }

}
