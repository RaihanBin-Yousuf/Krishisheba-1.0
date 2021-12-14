import React, { Component } from 'react'
import Bkash from './Bkash';
import UserServices from '../../services/UserServices';
const { toBengaliNumber} = require('bengali-number');

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBkash: null,
            seller: [],
            buyer: [],
            buyername: this.props.data.authUser.name,
            buyercontact: this.props.data.authUser.mobile,
            buyeraddress: this.props.data.authUser.address,
        };
        this.bkashForm = this.bkashForm.bind(this);
        this.buyerDetails = this.buyerDetails.bind(this);
    }
    
    componentDidMount() {
        if(this.props.data.addCart.length>1) {
            $.notify({message : 'প্রতিবারে একের অধিক প্রোডাক্ট কিনা সম্ভম নয়।'}, {type: 'danger'});
        }
    }
    async buyerDetails() {
        const buyerId = this.props.data.addCart[0];
        const buyer = await UserServices.buyer(buyerId.user_id);
        console.log('buyer details:>> ', buyer);
        this.setState({['buyer'] : buyer});
    }

    bkashForm(data) {
        if(this.props.data.authUser.access_to == 0) {
            $.notify({message : 'লেনদেনের জন্য অনুমতি প্রদান করা হইনি। অনুগ্রহ করে অপেক্ষা করুন'}, {type: 'danger'});
        } else {
            this.setState({ ['showBkash']: data });
        }
    }

    render() {
        console.log('this.props.data.addCart.length :>> ', this.props.data.addCart.length);
        let pdata = this.props.data;
        let payoutlist = '';
        payoutlist = this.props.data.addCart.map(cart=>(
            payoutlist = <p>{cart.product_name}-{cart.category}<span>{toBengaliNumber(cart.quantity)} {toBengaliNumber(cart.weight_unit)}</span></p>
        ));
        let bkash = '';
        if(this.props.data.addCart.length>1) {
            $.notify({message : 'প্রতিবারে একের অধিক প্রোডাক্ট কিনা সম্ভম নয়।'}, {type: 'danger'});
        } else {
            if(this.state.showBkash == 'show') {
                bkash = <Bkash data={this.props.data} showPage={this.props.showPage} bkashForm={this.bkashForm} />
            }
        }

        return (
            <div>
                {bkash}
               <section>
                    <div className="page-section section mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form action="#" className="checkout-form">
                                        <div className="row row-40">
                                            <div className="col-lg-7 mb-20">
                                                <div id="billing-form" className="mb-40">
                                                    <h4 className="checkout-title">বিবরণ</h4>
                                                    <div className="row">

                                                        <div className="col-md-6 col-12 mb-20">
                                                            <label>নাম</label>
                                                            <input disabled type="name" name="buyername" value={this.state.buyername} placeholder="Full Name"/>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-20">
                                                            <label>মোবাইল</label>
                                                            <input disabled type="text" name="buyercontact" value={this.state.buyercontact} placeholder="Phone number"/>
                                                        </div>
                                                        <div className="col-12 mb-20">
                                                            <label> ঠিকানা</label>
                                                            <input type="text" name="buyeraddress" value={this.state.buyeraddress} placeholder="Present Address"/>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-20">
                                                            <label>বিভাগ</label>
                                                            <select className="nice-select">
                                                                <option disabled selected value="">নির্বাচন করুন</option>  
                                                                <option>chittagong</option>
                                                                <option>Dhaka</option>
                                                                <option>Razshahi</option>
                                                                <option>Khulna</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-20">
                                                            <label>জেলা</label>
                                                            <select className="nice-select">
                                                                <option disabled selected value="">নির্বাচন করুন</option>  
                                                                <option>chittagong</option>
                                                                <option>cox's bazar</option>
                                                                <option>bandorban</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-20">
                                                            <label>থানা</label>
                                                            <select className="nice-select">
                                                                <option disabled selected value="">নির্বাচন করুন</option>  
                                                                <option>chittagong</option>
                                                                <option>cox's bazar</option>
                                                                <option>bandorban</option>
                                                            </select>
                                                        </div>
                                                        {/* <div className="col-12 mb-20">
                                                            <div className="check-box">
                                                                <input type="checkbox" id="create_account"/>
                                                                <label htmlFor="create_account">Create an Acount?</label>
                                                            </div>
                                                        </div>   */}
                                                        {this.state.showBkash == 'transport' ?
                                                        <div className="col-12 mb-20">
                                                            <div className="check-box">
                                                                <a onClick={()=>this.props.showPage('map')} class="btn btn-primary text-light p-2" role="button">পরিবহন সুবিধা পেতে ক্লিক করুন</a>
                                                            </div>
                                                        </div>: '' }
                                                    </div>  
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="row">
                                                    <div className="col-12 mb-60">
                                                        <h4 className="checkout-title">মোট কেনাকাটা</h4>
                                                        <div className="checkout-cart-total">
                                                            <h4>পণ্য <span>মোট</span></h4>
                                                                {payoutlist}
                                                            <p>মোট <span>৳ {toBengaliNumber(pdata.subTotal)}</span></p>
                                                            {/* <p>পরিসেবা চার্জ <span>৳ {toBengaliNumber(pdata.serviceFee)}</span></p> */}
                                                            <h4>সর্বমোট <span>৳ {toBengaliNumber(pdata.totalPrice)}</span></h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <h4 className="checkout-title">মূল্যপরিশোধ পদ্ধতি</h4>
                                                        <div className="row">
                                                            <div className="col">
                                                                <label className="place-order">পরিশোধ করুন</label>            
                                                            </div>
                                                            <div className="col mt-4 p-2 rounded text-center bg-white shadow" onClick={()=>this.bkashForm('show')}>
                                                                <img src="/bkash/bkash_logo.png" width="150px" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>                              
                                                </div>
                                            </div>                          
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}