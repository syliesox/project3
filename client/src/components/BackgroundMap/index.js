import React from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import GetStarted from '../GetStarted';
// import InputForm from '../InputForm';

const mapStyles = {
  width: '100%',
  height: '100%',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
};

export class BackgroundMap extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: [
        { 
          city: 'NaplesFL', 
          latitude: 26.14,  
          longitude: -81.79,
          info: 'Retire in Naples' 
        },{ 
          city: 'Arenal', 
          latitude: 10.46, 
          longitude: -84.70,
          info: 'Retire in Arenal' 
        },{ 
          city: 'Cebu', 
          latitude: 10.31, 
          longitude: 123.88,
          info: 'Retire in Cebu' 
        },{ 
          city: 'Cuenca', 
          latitude: -2.90, 
          longitude: -79.00,
          info: 'Retire in Cuenca' 
        },{ 
          city: 'Ubud', 
          latitude: -8.50, 
          longitude: 115.26,
          info: 'Retire in Ubud' 
        },{ 
          city: 'Krabi', 
          latitude: 8.08, 
          longitude: 98.90,
          info: 'Retire in Krabi' 
        },{ 
          city: 'CittaDiCastello', 
          latitude: 43.46, 
          longitude: 12.24,
          info: 'Retire in Citta Di Castello' 
        },{ 
          city: 'Granada', 
          latitude: 37.17, 
          longitude: -3.59,
          info: 'Retire in Granade' 
        },{ 
          city: 'Phoenix', 
          latitude: 33.44, 
          longitude: -112.07,
          info: 'Retire in Pheonix' 
        },{ 
          city: 'Goa', 
          latitude: 15.29, 
          longitude: 74.12,
          info: 'Retire in Goa' 
        }
      ],
      
    }
  }

  displayMarkers = () => {
    return this.state.cities.map((city, index) => {
      return <Marker key={index} id={index} position={{
       lat: city.latitude,
       lng: city.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (

        <Map
          google={this.props.google}
          zoom={3}
          style={mapStyles}
          initialCenter={{ lat: 0, lng: 0 }}
          >
          {this.displayMarkers()}

          {/* <GetStarted /> */}
          {/* <InputForm /> */}
        </Map>
    );
  }
}

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8uif52RrLx8YwlraL_banSZYCEZ3bz-E'
  })(BackgroundMap);