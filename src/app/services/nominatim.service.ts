import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_NOMINATIM_URL } from '../api/api-url';
import { NominatimResponse } from '../models/nominatim.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NominatimService {
  constructor(private http: HttpClient) {}

  search(req: string, country: string): Observable<NominatimResponse[]> {
    /* 
    In this qeury we have search by street, we can also use query params like <q>=..
    but if we use this param we can not use search by country, because in documentations says that we  can not combine any filter with params<q>
    https://nominatim.org/release-docs/develop/api/Search/
    */
    return this.http.get<NominatimResponse[]>(
      `${BASE_NOMINATIM_URL}/search?format=json&addressdetails=[1]&country=${country}&street=${req}`
    );
  }
}
