import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={16} initialCenter={{
        lat: 32.2667839,
        lng: -95.3093066
      }}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Test</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyArpZFbkDYp47N7y6TIyUQIJOdOzrtFjs8'
})(MapContainer);
