export interface Places {
  places: Place[];
}

export interface Place {
  id: string;
  name: string;
  category: string;
  geo: Geo;
  phone: string;
  description: string;
  reviews: Review[];
  photos: Photo[];
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface Review {
  date: string;
  author: string;
  rating: number;
  text: string;
  provider: string;
  url: string;
}

export interface Photo {
  url: string;
}
