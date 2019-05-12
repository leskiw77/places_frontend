import {Component, Input, OnInit} from '@angular/core';
import {Place} from '../../../../../model/places';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  @Input() place: Place;

  constructor() { }

  ngOnInit() {
  }

}
