import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import UserServices from '../../services/UserServices';
import Loading from '../../backend/Loading';
import TransportServices from '../../services/TransportServices';
import TransportBkash from './TransportBkash';
export default class MapGoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectPosition: null,
            users: null,
            authUser: null,
            form_show: false,
            transport: {
                admin_id: 0,
                seller_id: 0,
                buyer_id: 0,
                transport_id: 0,
                product_name: '',
                total_weight: '',
                transport_charge: '',
                transport_service_fee: '',
                category: '',
                sub_category: '',
                production_type: '',
                packaging_method: ''
            }
        };
        this.setSelectPosition = this.setSelectPosition.bind(this);
        this.getAuthUser = this.getAuthUser.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getLocation= this.getLocation.bind(this);
        this.getTransportFee = this.getTransportFee.bind(this);
    }

    componentDidMount() {
        this.getAuthUser();
        this.getAllUsers();
        this.getLocation();
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position=>this.showPosition(position));
          } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
    }

    async showPosition(position) {
        const location = {
            lat: position.coords.latitude,
            lng:  position.coords.longitude
        }
        console.log('location :>> ', location);
        // const updateLocation = await UserServices.updateLoc(location);
      }
  

    async getAuthUser() {
        const data = await UserServices.get();
        console.log('data :>> ', data);
        this.setState({ ['authUser']: data});
    }

    async getAllUsers() {
        const response = await UserServices.all({'all':'all'});
        this.setState({ ['users']: response});
    }

    setSelectPosition(data) {
        this.setState({
            selectPosition: data,
            form_show: true,
        })
    }

    getTransportFee(event) {
        const target = event.target;
        console.log('event :>> ', target);
        const value = target.value;
        const transportfee = value * (10/100);
        const intTransportFee = Math.ceil(transportfee);
        this.setState({
            transport:{
                ...this.state.transport,
                [event.target.name]: event.target.value,
                ['transport_service_fee']: intTransportFee,
            }
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
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDIxYaeRD3A-NkHt1EuB_Tv0thH8QB45SU"}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}

                />: '' }
                <div className="trasport-form mt-5 m-4">
                    <h2>Transport Form</h2>
                    {this.state.form_show ? 
                        <form data-no-ajax onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label htmlfor="transport_name">গাড়ির চালক এর নাম</label>
                                    <input type="text" value={this.state.selectPosition.name} className="form-control" name="transport_name" id="transport_name" placeholder="transport Name"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlfor="transport_name">গাড়ির মোবাইল নম্বর</label>
                                    <input type="text" value={this.state.selectPosition.mobile} className="form-control" name="transport_name" id="transport_name" placeholder="transport Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlfor="transport_address">গাড়ির চালকের ঠিকানা</label>
                                    <textarea className="form-control" value={this.state.selectPosition.address} name="transport_address" id="transport_address" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label htmlfor="total_weight">সম্পূর্ণ ওজন</label>
                                    <input type="text" value="" className="form-control" name="total_weight" id="total_weight"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlfor="transport_charge">পরিবহন ভাড়া</label>
                                    <input type="number" className="form-control" name="transport_charge" id="transport_charge" onChange={this.getTransportFee}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlfor="category">পণ্যের নাম</label>
                                    <input type="text" value="" className="form-control" name="category" id="category" placeholder="category"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label htmlfor="transport_service_fee">পরিবহন পরিষেবা ফি</label>
                                    <input type="number" disabled value={this.state.transport.transport_service_fee} className="form-control" name="transport_service_fee" id="transport_service_fee"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label htmlfor="sub_category">পণ্যের জাত</label>
                                    <input type="text" value="" className="form-control" name="sub_category" id="sub_category"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlfor="production_type">উৎপাদনের ধরন</label>
                                    <input type="text" value="" className="form-control" name="production_type" id="production_type" placeholder="production_type"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label htmlfor="packaging_method">প্যাকেজিং পদ্ধতি</label>
                                    <input type="text" value="" className="form-control" name="packaging_method" id="packaging_method"/>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4">
                                <button className="btn btn-success" type="submit">Confirm</button>
                                <a className="btn btn-default" onClick={()=>this.props.showForm(null)}>Close</a>
                            </div>
                        </div>
                        
                        
                    </form> : <h3>Select a Trasport First</h3> }
                </div>
            </div>
        )
    }
}