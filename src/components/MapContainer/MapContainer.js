import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

const style = {
  // width: '350px',
  // height: '350px'
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={15} style={style} initialCenter={{
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
