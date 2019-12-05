import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";

const style = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={15} style={style} initialCenter={{
        lat: 32.267328,
        lng: -95.308607
      }}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyArpZFbkDYp47N7y6TIyUQIJOdOzrtFjs8'
})(MapContainer);
