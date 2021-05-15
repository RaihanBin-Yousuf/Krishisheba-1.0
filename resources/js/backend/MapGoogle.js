import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

// function Map() {
//   return  (<GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   />);
// }

// const WrappedMap = 
export default class MapGoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectPosition: null,
            location: [
                {id: 1,name:'Md. Emtiyaz Uddin', mobile: '01813529789', lat: 22.3609389, lng: 91.8568732 },
                {id: 2,name:'Md. Ikram', mobile: '01819123909', lat: 22.3598423, lng: 91.8564492 },
                {id: 3,name:'Md. Jovan', mobile: '01812229755', lat:  22.3595222, lng: 91.8566486 },
                {id: 4,name:'Lola', mobile: '01813529090', lat:  22.359761, lng: 91.8555076 },
                {id: 5,name:'Paul sam', mobile: '01800412129', lat:  22.3606898, lng: 91.8571316 },
            ]
        };
        this.setSelectPosition = this.setSelectPosition.bind(this);
    }
    setSelectPosition(data) {
        this.setState({
            selectPosition: data
        })
    }
    render() {
        // console.log('this.state.select :>> ', this.state.selectPosition);
        let userDetails = this.state.selectPosition;
        let WrappedMap = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={17}
              defaultCenter={{ lat: 22.3609389, lng: 91.8568732 }}
            >
                {this.state.location.map(position=> (
                <Marker
                    key={position.id}
                    position={{ lat: position.lat, lng: position.lng }}
                    onClick={()=> {
                        this.setSelectPosition(position);
                    }}
                    /> 
                    ))}
                    {userDetails && (
                        <InfoWindow
                            position={{ lat: userDetails.lat, lng: userDetails.lng }}
                        >
                            
                            <div>
                                <h2>Name: {userDetails.name}</h2>
                                <h4>Mobile: {userDetails.mobile}</h4>

                            </div>
                        </InfoWindow>
                    )}
            </GoogleMap>));
        return (
            <div>
                <h3>In react page</h3>
                <WrappedMap 
                    isMarkerShown
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB9vLP-epdJF-YtsJDng8CHEVB5l9TnDNk"}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}

                />
            </div>
        )
    }
}

if (document.getElementById('react_map_google')) {
    ReactDOM.render(<MapGoogle />, document.getElementById('react_map_google'));
}

