import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class LocationMarkerService {

  capitals: string = 'http://localhost:4200/assets/data/usa-capitals.json';
  constructor(private http: HttpClient) { }

  // Location marker
  // makeCapitalMarkers(map: L.map): void {
    makeCapitalMarkers(map:any): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon]); 
        marker.addTo(map).bindPopup(`${c.properties.name} <br> ${c.properties.population}`); // add marker and popup
      }
    });
   }

  //  Circular marker
  makeCapitalCircleMarkers(map: any): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const circle = L.circleMarker([lat, lon],{radius:11});
        
        circle.addTo(map).bindPopup(`${c.properties.name} <br> ${c.properties.population}`); // add marker and popup;
      }
    });
  }
}
