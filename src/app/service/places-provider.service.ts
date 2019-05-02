import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Location} from './location.service';
import {Geo, Place, Places} from '../model/places';
import {first, map} from 'rxjs/operators';

@Injectable()
export class PlacesProviderService {
  url = 'https://2fb554c4-5564-4f45-8b42-7024f7ee9132.mock.pstmn.io/';
  // url = 'http://localhost:8080/';

  private chosenPlace: Subject<Place> = new Subject<Place>();
  private allPlaces: Subject<Places> = new Subject<Places>();

  constructor(private http: HttpClient) {
  }

  get(makeRequest = true): Observable<Places> {
    if (makeRequest) {
      this.getAllPlaces();
    }
    return this.allPlaces.asObservable();
  }

  private getAllPlaces() {
    return this.http.get<Places>(this.url + 'places')
      .subscribe(e => this.allPlaces.next(e));
  }

  getChosenPlaceObservable(): Observable<Place> {
    return this.chosenPlace.asObservable();
  }

  setChosenPlace(place: Place) {
    this.chosenPlace.next(place);
  }

  addPlace(body: {name: string, category: string, geo: Geo, phone: string, description: string}) {
    console.log(body);
    this.http.post(this.url + 'places', body).subscribe(_ => this.getAllPlaces());
  }

}
