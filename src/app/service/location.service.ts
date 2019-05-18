import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Geo} from '../model/places';

@Injectable()
export class LocationService {

  private mapCenterGeo: Geo = null;
  // initial center position for the map
  private lat = 50.057;
  private lng = 19.9278;

  constructor() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  getLatitude() {
    return this.lat;
  }

  getLongitude() {
    return this.lng;
  }

  getGeo(): Geo {
    const lat = this.lat;
    const lng = this.lng;
    return {lat, lng} as Geo;
  }

  setMapCenter(geo: Geo) {
    this.mapCenterGeo = geo;
  }

  getMapCenter(): Geo {
    return this.mapCenterGeo;
  }
}
