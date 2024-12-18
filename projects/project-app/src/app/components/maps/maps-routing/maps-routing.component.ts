import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-maps-routing',
  templateUrl: './maps-routing.component.html',
  styleUrls: ['./maps-routing.component.css']
})
export class MapsRoutingComponent {
  private map: any;
  ngAfterViewInit(): void {
    this.initMap1()
  }

  private initMap1(): void {

    // HTML initilization (set the view)
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    // displaying a series of tiles across the page
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const circle1 = L.circleMarker([47.042418, -122.893077], { radius: 11 });
    circle1.addTo(this.map).bindPopup(`Olympia <br>51609`); // add marker and popup;

    const circle2 = L.circleMarker([46.595805, -112.027031], {radius:8,weight:8});
    circle2.addTo(this.map).bindPopup(`Helana <br>31429`); // add marker and popup;

    const circle3 = L.circleMarker([44.367966, -100.336378], {radius:8,weight:8} );
    circle3.addTo(this.map).bindPopup(`Pierre <br>14004`); // add marker and popup;

    circle1.setStyle({ color: 'red' });

    circle3.setStyle({ color: 'green' });

    // polyline routing
    var polyline = L.polyline([
      [47.042418, -122.893077],
      [46.595805, -112.027031],
      [44.367966, -100.336378]
    ]).addTo(this.map);
  }
}
