import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
// import GoogleMapService from '../.././js/services/GoogleMapService';
import UserServices from '../.././js/services/UserServices';
import Loading from './Loading';
export default class MapGoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectPosition: null,
            users: null,
            authUser: null,
            location: [
                {id: 1,name:'Md. Emtiyaz Uddin', mobile: '01813529789', lat: 22.3609389, lng: 91.8568732 },
                {id: 2,name:'Md. Ikram', mobile: '01819123909', lat: 22.3598423, lng: 91.8564492 },
                {id: 3,name:'Md. Jovan', mobile: '01812229755', lat: 22.3595222, lng: 91.8566486 },
                {id: 4,name:'Lola', mobile: '01813529090', lat: 22.359761, lng: 91.8555076 },
                {id: 5,name:'Paul sam', mobile: '01800412129', lat:  22.3606898, lng: 91.8571316 },
            ]
        };
        this.setSelectPosition = this.setSelectPosition.bind(this);
        this.getAuthUser = this.getAuthUser.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);

    }

    componentDidMount() {
        this.getAuthUser();
        this.getAllUsers();
    }

    async getAuthUser() {
        const data = await UserServices.get();
        console.log('data :>> ', data);
        this.setState({ ['authUser']: data});
    }

    async getAllUsers() {
        const response = await UserServices.all({'all':'all'});
        console.log('users ::>', response);
        this.setState({ ['users']: response});
    }

    setSelectPosition(data) {
        this.setState({
            selectPosition: data
        })
    }
    render() {
        if (!this.state.authUser) {
            return <Loading />;
        } else if(!this.state.users) {
            return <Loading />;
        }
        let auth={ lat: 22.3609389, lng: 91.8568732 };
        if(this.state.authUser) {
            auth = this.state.authUser;
        }
        console.log('auth :>> ', auth);
        let userDetails = this.state.selectPosition;
        console.log('userDetails :>> ', userDetails);
        let WrappedMap = withScriptjs(withGoogleMap(props =>
            <GoogleMap
              defaultZoom={17}
              defaultCenter={{ lat: Number(this.state.authUser.lat), lng: Number(this.state.authUser.lng) }}
            >
                {this.state.users.map(position=> (
                <Marker
                    key={position.id}
                    position={{ lat: Number(position.lat), lng: Number(position.lng) }}
                    onClick={()=> {
                        this.setSelectPosition(position);
                    }}
                    onMouseEnter={()=> {
                        this.setSelectPosition(position);
                    }}
                    /> 
                    ))}
                    {userDetails && (
                        <InfoWindow
                            position={{ lat: Number(userDetails.lat), lng: Number(userDetails.lng) }}
                        >
                            
                            <div>
                                <div className="row">
                                    <div className="col-5 mr-3">
                                        <img src={'storage/profile/'+userDetails.profile_img} width="150px" alt="" />
                                    </div>
                                    <div className="col mt-3">
                                        <p><span className="font-weight-bold">Name:</span> {userDetails.name}</p>
                                        <p><span className="font-weight-bold">Email:</span> {userDetails.email}</p>
                                        <p><span className="font-weight-bold">Contact:</span> {userDetails.mobile}</p>
                                        <p><span className="font-weight-bold">Address:</span> {userDetails.address}</p>
                                    </div>
                                </div>
                                

                            </div>
                        </InfoWindow>
                    )}
            </GoogleMap>));
        return (
            <div>
                <h3>In react page</h3>
                { this.state.users ?
                <WrappedMap 
                    isMarkerShown
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB9vLP-epdJF-YtsJDng8CHEVB5l9TnDNk"}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}

                />: '' }
            </div>
        )
    }
}

if (document.getElementById('react_map_google')) {
    ReactDOM.render(<MapGoogle />, document.getElementById('react_map_google'));
}

