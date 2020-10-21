import React , {Component} from 'react';
//import { Map,GoogleApiWrapper, Marker } from 'google-maps-react';
//import GoogleMapReact from 'google-map-react';

export class MapContainer extends Component {
    constructor(props) {
      super(props);
    }
  
    //displayMarkers = () => {
    //  return this.state.stores.map((store, index) => {
    //    return <Marker key={index} id={index} position={{
    //     lat: store.latitude,
    //     lng: store.longitude,
    //   }}
    //   onClick={() => console.log("You clicked me!")} />
    //  })
    //}
  
    render() {
        const mapStyles = {
            width: '100%',
            height: '500px',
        };
        return (
            <section className="contact_map">
                <iframe frameBorder="0" style={{ width: "100%", height: "100%" }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10014.628192251228!2d16.97165664760742!3d51.133233659150044!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf5f02a4f0b70f96f!2sDW%20Moto!5e0!3m2!1spl!2spl!4v1600981039357!5m2!1spl!2spl" >
                </iframe>
            </section>
      );
    }
  }

export default MapContainer;

  //export default GoogleApiWrapper({
  //  apiKey: 'AIzaSyBCB4y0SztfLo236n4JECwTvIQd-VecF2Y'
  //})(MapContainer);

//<section className="contact_map">
//    <Map
//        google={this.props.google}
//        zoom={8}
//        initialCenter={{ lat: 47.444, lng: -122.176 }}
//        style={mapStyles}
//    >
//        {this.displayMarkers()}
//    </Map>
//</section>