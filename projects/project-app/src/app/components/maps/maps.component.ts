import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { LocationMarkerService } from '../../service/location-marker.service';

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
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit {

  private map: any;

  constructor(private markerService: LocationMarkerService) { }
  ngAfterViewInit(): void {
    this.initMap1()
    this.markerService.makeCapitalMarkers(this.map);
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
  }

}
