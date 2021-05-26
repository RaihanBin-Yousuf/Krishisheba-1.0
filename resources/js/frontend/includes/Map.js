import React, { Component } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow ,DirectionsRenderer } from 'react-google-maps';
import UserServices from '../../services/UserServices';
import Loading from '../../backend/Loading';
import TransportServices from '../../services/TransportServices';
import TransportBkash from './TransportBkash';
const { toBengaliNumber, toBengaliWord} = require('bengali-number');
export default class MapGoogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectPosition: null,
            users: null,
            authUser: null,
            form_show: false,
            transport_bkash_show: null,
            transport: {
                admin_id: '',
                payment_id: 0,
                buyer_id: '',
                category: '',
                final_transport_charge: 0,
                seller_id: '',
                sub_category: '',
                total_weight: '',
                transport_id: 0,
                transport_contact: null,
                transport_charge: 0,
                transport_service_fee: 0,
                product_name: '',
                production_type: '',
                packaging_method: '',
                weight_unit: '',
            }
        };
        this.setSelectPosition = this.setSelectPosition.bind(this);
        this.getAuthUser = this.getAuthUser.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getLocation= this.getLocation.bind(this);
        this.getTransportFee = this.getTransportFee.bind(this);
        this.getOldTransport = this.getOldTransport.bind(this);
        this.showTransPortBkash = this.showTransPortBkash.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getAuthUser();
        this.getAllUsers();
        this.getLocation();
        this.getOldTransport();
    } 

    showTransPortBkash(page) {
        this.setState({['transport_bkash_show']: page});
    }

    getOldTransport() {
        console.log('object :>> ', this.props.data.product_pay);
        this.setState({
            transport: {
                ...this.state.transport,
                admin_id: this.props.data.product_pay.admin_accept_id,
                payment_id: this.props.data.product_pay.id,
                buyer_id: this.props.data.product_pay.buyer_id,
                category: this.props.data.product_pay.category,
                seller_id: this.props.data.product_pay.seller_id,
                sub_category: this.props.data.product_pay.sub_category,
                total_weight: this.props.data.product_pay.total_weight,
                product_name: this.props.data.product_pay.product_name,
                production_type: this.props.data.product_pay.production_type,
                packaging_method: this.props.data.product_pay.packaging_method,
                weight_unit: this.props.data.product_pay.weight_unit,
            }
        })
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
            transport: {
                ...this.state.transport,
                ['transport_id']: data.id,
                ['transport_contact']: data.mobile,
            }
        })
    }

    getTransportFee(event) {
        if(event.target.value> 0) {
            const target = event.target;
            console.log('event :>> ', target);
            const value = target.value;

            const transportfee = value * (10/100);
            const intTransportFee = Math.ceil(transportfee);
            const finalTransportCharge = value-intTransportFee;
            
            this.setState({
                transport:{
                    ...this.state.transport,
                    [event.target.name]: event.target.value,
                    ['transport_service_fee']: intTransportFee,
                    ['final_transport_charge']: finalTransportCharge,
                }
            })
        } else {
            $.notify({message: 'গ্রহণযোগ্য নয়'}, {type: 'danger'});
        }

    }

    handleSubmit(e) {
        e.preventDefault();
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
        let userDetails = this.state.selectPosition;
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
                {this.state.transport_bkash_show == 'show' ?
                <TransportBkash data={this.state.transport} pdata={this.props.data} showTransPortBkash={this.showTransPortBkash}/> : ''}
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
                    <h2>পরিবহন ফর্ম</h2>
                    {this.state.form_show ? 
                        <form data-no-ajax onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label htmlfor="transport_name">গাড়ির চালক এর নাম</label>
                                    {/* <input type="text" value={this.state.selectPosition.name} className="form-control" name="transport_name" id="transport_name" placeholder="transport Name"/> */}
                                    <h4>{this.state.selectPosition.name}</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlfor="transport_name">গাড়ির মোবাইল নম্বর</label>
                                    {/* <input type="text" value={toBengaliNumber(this.state.selectPosition.mobile)} className="form-control" name="transport_name" id="transport_name" placeholder="transport Name"/> */}
                                    <h4>{toBengaliNumber(this.state.selectPosition.mobile)}</h4>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <div className="form-group">
                                    <label htmlfor="transport_address">গাড়ির চালকের ঠিকানা</label>
                                    {/* <textarea className="form-control" value={this.state.selectPosition.address} name="transport_address" id="transport_address" rows="3"></textarea> */}
                                    <h4>{this.state.selectPosition.address}</h4>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label htmlfor="total_weight">সম্পূর্ণ ওজন</label>
                                    {/* <input type="text" value="" className="form-control" name="total_weight" id="total_weight"/> */}
                                    <h4>{toBengaliNumber(this.state.transport.total_weight)} {this.state.transport.weight_unit}</h4>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlfor="transport_charge">পরিবহন ভাড়া পরিষেবা ফি সহ</label>
                                    <input type="number" min="1" className="form-control" name="transport_charge" id="transport_charge" onChange={this.getTransportFee}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlfor="category">পণ্যের নাম</label>
                                    {/* <input type="text" value="" className="form-control" name="category" id="category" placeholder="category"/> */}
                                    <h4>{this.state.transport.category}</h4>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group ">
                                    <label htmlfor="transport_service_fee">পরিবহন পরিষেবা ফি</label>
                                    <h4>{toBengaliNumber(this.state.transport.transport_service_fee)+" টাকা"}</h4>
                                    {/* <input type="text" disabled value={this.state.transport.transport_service_fee+" টাকা"} className="form-control" name="transport_service_fee" id="transport_service_fee"/> */}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group ">
                                    <label htmlfor="final_transport_charge">পরিবহন ভাড়া পরিষেবা ফি ছাড়া</label>
                                    <h4>{toBengaliNumber(this.state.transport.final_transport_charge)+" টাকা"}</h4>
                                    {/* <input type="text" disabled value={this.state.transport.final_transport_charge+" টাকা"} className="form-control" name="final_transport_charge" id="final_transport_charge"/> */}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label htmlfor="sub_category">পণ্যের জাত</label>
                                    {/* <input type="text" value="" className="form-control" name="sub_category" id="sub_category"/> */}
                                    <h4>{this.state.transport.sub_category}</h4>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlfor="production_type">উৎপাদনের ধরন</label>
                                    {/* <input type="text" value="" className="form-control" name="production_type" id="production_type" placeholder="production_type"/> */}
                                    <h4>{this.state.transport.production_type}</h4>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group ">
                                    <label htmlfor="packaging_method">প্যাকেজিং পদ্ধতি</label>
                                    {/* <input type="text" value="" className="form-control" name="packaging_method" id="packaging_method"/> */}
                                    <h4>{this.state.transport.packaging_method}</h4>

                                </div>
                            </div>
                            <div className="col-md-6 mt-4">
                                <button onClick={()=>this.showTransPortBkash('show')} className="btn btn-success">Confirm</button>
                                <a className="btn btn-default" onClick={()=>this.props.showPage(null)}>Close</a>
                            </div>
                        </div>
                        
                        
                    </form> : <h3>প্রথমে একটি পরিবহন নির্বাচন করুন</h3> }
                </div>
            </div>
        )
    }
}