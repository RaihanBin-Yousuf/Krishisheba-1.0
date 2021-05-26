import React, { Component } from 'react'
import Bkash from './Bkash';
const { toBengaliNumber} = require('bengali-number');

export default class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBkash: null,
            seller: [],
        };
        this.bkashForm = this.bkashForm.bind(this);
    }
    
    componentDidMount() {
        if(this.props.data.addCart.length>1) {
            $.notify({message : 'প্রতিবারে একের অধিক প্রোডাক্ট কিনা সম্ভম নয়।'}, {type: 'danger'});
        }
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
            payoutlist = <li>{cart.sub_category} - {toBengaliNumber(cart.quantity)} {toBengaliNumber(cart.weight_unit)}<span>৳ {toBengaliNumber(cart.total_each_price)}</span></li>
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
                                                            <label>First Name*</label>
                                                            <h4></h4>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-20">
                                                            <label>Email Address*</label>
                                                            <input type="email" placeholder="Email Address"/>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-20">
                                                            <label>Phone no*</label>
                                                            <input type="text" placeholder="Phone number"/>
                                                        </div>
                                                        <div className="col-12 mb-20">
                                                            <label>Company Name</label>
                                                            <input type="text" placeholder="Company Name"/>
                                                        </div>
                                                        <div className="col-12 mb-20">
                                                            <label>Address*</label>
                                                            <input type="text" placeholder="Present Address"/>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-20">
                                                            <label>Division*</label>
                                                            <select className="nice-select">
                                                                <option disabled selected value="">নির্বাচন করুন</option>  
                                                                <option>chittagong</option>
                                                                <option>Dhaka</option>
                                                                <option>Razshahi</option>
                                                                <option>Khulna</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-20">
                                                            <label>District</label>
                                                            <select className="nice-select">
                                                                <option disabled selected value="">নির্বাচন করুন</option>  
                                                                <option>chittagong</option>
                                                                <option>cox's bazar</option>
                                                                <option>bandorban</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-20">
                                                            <label>Thana*</label>
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
                                                        </div>	 */}
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
                                                        <h4 className="checkout-title">Cart Total</h4>
                                                        <div className="checkout-cart-total">
                                                            <h4>Product <span>Total</span></h4>
                                                            <ul>
                                                                {payoutlist}
                                                            </ul>
                                                            <p>মোট <span>৳ {toBengaliNumber(pdata.subTotal)}</span></p>
                                                            <p>পরিসেবা চার্জ <span>৳ {toBengaliNumber(pdata.serviceFee)}</span></p>
                                                            <h4>সর্বমোট <span>৳ {toBengaliNumber(pdata.totalPrice)}</span></h4>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <h4 className="checkout-title">Payment Method</h4>
                                                        {/* <div className="checkout-payment-method">									
                                                            <div className="single-method">
                                                                <input type="radio" id="payment_bank" name="payment-method" value="bank"/>
                                                                <label htmlFor="payment_bank">Direct Bank Transfer</label>
                                                                <p data-method="bank">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                            </div>											
                                                            <div className="single-method">
                                                                <input type="radio" id="payment_cash" name="payment-method" value="cash"/>
                                                                <label htmlFor="payment_cash">Cash on Delivery</label>
                                                                <p data-method="cash">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                            </div>										
                                                            <div className="single-method">
                                                                <input type="radio" id="payment_payoneer" name="payment-method" value="payoneer"/>
                                                                <label htmlFor="payment_payoneer">Stripe</label>
                                                                <p data-method="payoneer">Please send a Check to Store name with Store Street, Store Town, Store State, Store Postcode, Store Country.</p>
                                                            </div>
                                                            
                                                            <div className="single-method">
                                                                <input type="checkbox" id="accept_terms"/>
                                                                <label htmlFor="accept_terms">I’ve read and accept the terms & conditions</label>
                                                            </div>										
                                                        </div>			 */}
                                                        <div className="row">
                                                            <div className="col">
                                                                <button className="place-order">Place order</button>			
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
