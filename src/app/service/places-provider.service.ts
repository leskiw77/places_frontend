import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Geo, Place, Places, ReviewToAdd} from '../model/places';
import {LocationService} from './location.service';

@Injectable()
export class PlacesProviderService {
  url = 'https://places-core.herokuapp.com/api/v1/';

  private chosenPlace: BehaviorSubject<Place> = new BehaviorSubject<Place>(null);
  private allPlaces: Subject<Places> = new Subject<Places>();

  constructor(private http: HttpClient, private locationService: LocationService) {
  }

  get(makeRequest = true): Observable<Places> {
    if (makeRequest) {
      this.getAllPlaces();
    }
    return this.allPlaces.asObservable();
  }

  getAllPlaces(name: string = null, geo: Geo = null) {
    let params = new HttpParams();

    if (name) {
      params = params.set('name', name);
    }

    const g = geo ? geo : this.extractGeo();
    params = params.set('lat', g.lat.toString());
    params = params.set('lng', g.lng.toString());

    return this.http.get<Places>(this.url + 'places', {params})
      .subscribe(e => this.allPlaces.next(e), e => console.error(e));
  }

  getChosenPlaceObservable(): Observable<Place> {
    return this.chosenPlace.asObservable();
  }

  setChosenPlace(place: Place) {
    this.chosenPlace.next(place);
  }

  addPlace(body: { name: string, category: string, geo: Geo, phone: string, description: string }) {
    console.log(body);
    this.http.post(this.url + 'places', body)
      .subscribe(_ => this.getAllPlaces(body.name, body.geo), err => console.warn(err));
  }

  addReview(place: Place, body: ReviewToAdd, makeRequest = true) {
    console.log('add review');
    console.log(body);

    this.http.post(this.url + 'places/' + place.id + '/reviews', body)
      .subscribe(_ => {
          if (makeRequest) {
            this.getAllPlaces(place.name, place.geo);
          }
        },
        err => console.warn(err));
  }

  private extractGeo(): Geo {
    const place = this.chosenPlace.getValue();
    return place ? place.geo : this.locationService.getGeo();
  }
}
