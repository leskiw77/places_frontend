import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface Location {
  latitude: string;
  longitude: string;
  city: string;
  country_name: string;
}

@Injectable()
export class LocationService {

  private url = 'https://ipapi.co/json';

  constructor(private http: HttpClient) { }

  getLocation(): Observable<any> {
    return this.http.get(this.url).pipe(first());
  }

  getIPInfo(): Observable<any>  {
    return this.http.get<Location>("https://ipapi.co/json/");
  }
}
