import React, { Component } from 'react'
// import PaymentService from '../../services/PaymentService';
import UserServices from '../../services/UserServices';
export default class Bkash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCount: 0,
            adminAccount: [],
        }
        this.setCount = this.setCount.bind(this);
        this.setunCount = this.setunCount.bind(this);
        this.permissionUser = this.permissionUser.bind(this);
    }

    componentDidMount() {
        this.permissionUser();
    }

    async permissionUser() {
        const user = await UserServices.permission({'access_to': this.props.data.authUser.access_to});
        this.setState({['adminAccount']: user[0]});
    }

    setunCount() {
        this.setState({ ['showCount']: 0},()=>{this.props.bkashForm(null);});
        
    }

    setCount() {
        const count = this.state.showCount+1;
        this.setState({ ['showCount']: count});
    }

    render() {
        let showContent = '';
        if(this.state.showCount == 0) {
            showContent = <div className="bkash-full-details w-75 p-2 ml-5 text-light mt-4">
                            <p><span className="font-weight-bold">মার্চেন্ট: </span>{this.state.adminAccount.name}</p>
                            <p><span className="font-weight-bold">ক্রেতা অ্যাকাউন্ট নম্বর: </span>01919123451</p>
                            <p><span className="font-weight-bold">সর্বমোট: </span>৳ {this.props.data.totalPrice}</p>
                        </div>
        } else {
            showContent = <div className="bkash-total-details bg-white p-3">
                            <div className="row">
                                <div className="col">
                                    <h4 className="font-weight-bold">মার্চেন্ট অ্যাকাউন্ট:</h4>
                                    <p><span className="font-weight-bold">নম্বর:</span> {this.state.adminAccount.mobile}</p>
                                </div>
                                <div className="col">
                                    <h1>৳ {this.props.data.totalPrice}</h1>
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
                            <form action="">
                                { this.state.showCount == 1 ?
                                <div className="bkash-first-page">
                                    <div className="text-center font-weight-bold text-light">আপনার বিকাশ অ্যাকাউন্ট নম্বর</div>
                                        <div className="text-center mt-3">
                                            <input type="text" size="35" value={this.props.data.authUser.mobile} placeholder="e.g. 01XXXXXX"/>
                                        </div>
                                </div> : '' }
                                {this.state.showCount == 2 ?
                                <div className="bkash-second-page">
                                    <div className="text-center font-weight-bold text-light">গোপন কোড</div>
                                    <div className="text-center mt-3">
                                        <input type="password" size="35" />
                                    </div>
                                </div> : '' }
                                
                                <div className="mt-4">
                                    <div className="text-center text-light"><span className="font-weight-bold">নিশ্চিত</span> ক্লিক করে। আপনি শর্তাদি এবং <span className="font-weight-bold">শর্তগুলিতে সম্মতি দিচ্ছেন।</span></div>
                                </div>
                                <div className="row bkash-btn mt-4">
                                    <div className="col p-3 btn btn-secondary" onClick={this.setCount}>
                                        নিশ্চিত করুন
                                    </div>
                                    <div className="col p-3 btn btn-secondary" onClick={this.setunCount}>
                                        বাতিল করুন
                                    </div>
                                </div>
                                <div className="bkash-help p-3">
                                    <h3>16247</h3>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
       
       )
    }
}
