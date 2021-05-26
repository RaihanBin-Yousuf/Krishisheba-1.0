import React, { Component } from 'react';
import UserServices from '../../services/UserServices';
import TransportServices from '../../services/TransportServices';
const { toBengaliNumber} = require('bengali-number');

export default class TransportBkash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCount: 0,
            transport: this.props.data,
            buyercontact: this.props.pdata.authUser.mobile,
            buyer : this.props.pdata.authUser,
            productprice: this.props.data.transport_charge,
            adminAccount: [],
            code: '',
        }
        this.setCount = this.setCount.bind(this);
        this.setunCount = this.setunCount.bind(this);
        this.permissionUser = this.permissionUser.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setunCount() {
        this.setState({ ['showCount']: 0},()=>{this.props.showTransPortBkash(null);});
    }

    
    async permissionUser() {
        const user = await UserServices.permission({'access_to': this.props.data.authUser.access_to});
        this.setState({['adminAccount']: user[0]});
    }


    setCount() {
        const count = this.state.showCount+1;
        this.setState({ ['showCount']: count});
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log('this.state.transport :>> ', this.state.transport);
        // const data = await TransportServices.save(this.state.transport);
        // console.log('data :>> ', data);
        const digits_only = string => [...string].every(c => '0123456789'.includes(c));
        if(this.state.buyercontact.length == 11 && digits_only(this.state.buyercontact)) {
            if(this.state.code.length == 6) {
                const digits_only = string => [...string].every(c => '0123456789'.includes(c));
                if(digits_only(this.state.code)) {
                    const res = await TransportServices.save(this.state.transport);
                    this.setState({ ['showCount']: 0},()=>{this.props.showTransPortBkash(null);});
                    
                } else {
                    $.notify({message: 'Please Enter only Digit code'}, {type: 'warning'});
                }
            } else {
                $.notify({message: 'Please Enter Six digit Code'}, {type: 'warning'});
            }
        } else {
            $.notify({message: 'Invalid Number'}, {type: 'danger'});
        }
    }

    render() {
        let showContent = '';
        if(this.state.showCount == 0) {
            showContent = <div className="bkash-full-details w-75 p-2 ml-5 text-light mt-4">
                            <p><span className="font-weight-bold">মার্চেন্ট: </span>{this.state.adminAccount.name}</p>
                            <p><span className="font-weight-bold">বিক্রেতা অ্যাকাউন্ট নম্বর: </span>{toBengaliNumber(this.state.transport.mobile)}</p>
                            <p><span className="font-weight-bold">সর্বমোট: </span>৳ {toBengaliNumber(this.state.transport.transport_charge)}</p>
                        </div>
        } else {
            showContent = <div className="bkash-total-details bg-white p-3">
                            <div className="row">
                                <div className="col">
                                    <h4 className="font-weight-bold">মার্চেন্ট অ্যাকাউন্ট:</h4>
                                    <p><span className="font-weight-bold">নম্বর:</span> {toBengaliNumber(this.state.adminAccount.mobile)}</p>
                                </div>
                                <div className="col">
                                    <h1>৳ {toBengaliNumber(this.state.transport.transport_charge)}</h1>
                                </div>
                            </div>
                        </div>
        }
        return (
            <div className="bkash-background">
                <div className="bkash-cart">
                    <div className="bkash-header ">
                        <img src="/bkash/bkash_payment_logo.png" width="450px" alt="" srcset="" />
                    </div>
                    <div className="bkash-body text-center mt-2">
                        {showContent}
                        <div className="bkash-input mt-5">
                            <form action="" onSubmit={this.handleSubmit}>
                                { this.state.showCount == 1 ?
                                <div className="bkash-first-page">
                                    <div className="text-center font-weight-bold text-light">আপনার বিকাশ অ্যাকাউন্ট নম্বর</div>
                                        <div className="text-center mt-3">
                                            <input type="text" size="35" name="buyercontact" value={this.state.buyercontact} onChange={this.handleInputChange} placeholder="e.g. 01XXXXXX"/>
                                        </div>
                                </div> : '' }
                                {this.state.showCount == 2 ?
                                <div className="bkash-second-page">
                                    <div className="text-center font-weight-bold text-light">গোপন কোড</div>
                                    <div className="text-center mt-3">
                                        <input type="password" onChange={this.handleInputChange} name="code" max="6" size="35" />
                                    </div>
                                </div> : '' }
                                
                                <div className="mt-4">
                                    <div className="text-center text-light"><span className="font-weight-bold">নিশ্চিত</span> ক্লিক করে। আপনি শর্তাদি এবং <span className="font-weight-bold">শর্তগুলিতে সম্মতি দিচ্ছেন।</span></div>
                                </div>
                                <div className="row bkash-btn mt-4">
                                    {this.state.showCount == 2 ?
                                    // <div className="col p-3 btn btn-secondary" >
                                        <button type="submit" className="col p-3 btn btn-secondary">নিশ্চিত করুন</button> :
                                    <div className="col p-3 btn btn-secondary" onClick={this.setCount}>
                                        নিশ্চিত করুন
                                    </div>  }
                                    <div className="col p-3 btn btn-secondary" onClick={this.setunCount}>
                                        বাতিল করুন
                                    </div>
                                </div>
                                <div className="bkash-help p-3">
                                    <h3>{toBengaliNumber(16247)}</h3>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
