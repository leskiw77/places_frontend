import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../../../model/places';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {

  @Input() place: Place;

  constructor() { }

  ngOnInit() {
  }

}
