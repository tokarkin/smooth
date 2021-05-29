export interface NominatimResponse {
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  type: string;
  boundingbox: string[];
  address: Address
}
export interface Address {
    city: string;
    country: string;
    country_code: string;
    county: string;
    municipality: string;
    postcode: string;
    road: string;
    state: string;
    house_number: string;
}
