import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive,  Input} from '@angular/core';
declare var google: any;

@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin;
  @Input() destination;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnInit(){
    var oLat=parseFloat(this.origin.latitude);
    var dLat=parseFloat(this.destination.latitude);
    var oLng=parseFloat(this.origin.longitude);
    var dLng=parseFloat(this.destination.longitude);
    this.gmapsApi.getNativeMap().then(map => {
              var directionsService = new google.maps.DirectionsService;
              var directionsDisplay = new google.maps.DirectionsRenderer;
              directionsDisplay.setMap(map);
              directionsService.route({
                      origin: {lat: oLat, lng: oLng},
                      destination: {lat: dLat, lng: dLng},
                      waypoints: [],
                      optimizeWaypoints: true,
                      travelMode: 'DRIVING'
                    }, function(response, status) {
                                if (status === 'OK') {
                                  directionsDisplay.setDirections(response);
                                } else {
                                  window.alert('Directions request failed due to ' + status);
                                }
              });

    });
  }
}