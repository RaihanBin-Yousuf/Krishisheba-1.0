import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PaymentService from '../../js/services/PaymentService';
import Pagination from '../../js/components/Paginations';
import Bkashbackend from './Bkashbackend';
const { toBengaliNumber, toBengaliWord} = require('bengali-number');
import UserServices from '../../js/services/UserServices';

export default class BuyerPaymentList extends Component {
    constructor(props) {
        super(props);
        this.state={
            payments: [],
            single_payment: [],
            auth_user: [],
        };
        this.page = 1;
        this.limit = 10;
        this.count = 0;
        this.sort = 'id';
        this.sortdirection = 'asc';
        this.query = '';
        this.handlePageChange = this.handlePageChange.bind(this);
        this.getPaymentList = this.getPaymentList.bind(this);
        this.getAuthUser = this.getAuthUser.bind(this);
    }

    componentDidMount() {
        this.getAuthUser();
    }

    async getAuthUser() {
        const user = await UserServices.authUser();
        this.setState({
            ['auth_user']: user,
        },()=>{this.getPaymentList();})

    }

    handlePageChange(event) {
        const target = event.target;
        const page = target.getAttribute('data-page');
        const lastPage = Math.ceil(this.count / this.limit);
        if ( 1 <= page && page <= lastPage && page != this.page ) {
            this.page = page;
            this.getPaymentList();
        }
    }

    async getPaymentList() {
        const getpayments = await PaymentService.buyerPaymentList({
            query : this.state.query,
            sort : this.sort,
            direction : this.sortdirection,
            page: this.page,
            limit: this.limit,
        });
        console.log('getpayments :>> ', getpayments);
        this.page = getpayments.current_page;
        this.limit = getpayments.per_page;
        this.count = getpayments.total;
        this.setState({
            ['payments']: getpayments.data,
        })
    }
    render() {
        let paymentsList = '';
        console.log('this.state.payments :>> ', this.state);
        if(this.state.payments) {
            paymentsList = this.state.payments.map(payment=>(
                paymentsList = <div className="card">
                                    {payment.accept_payment == 0 ?
                                    <div className="card-header text-light bg-danger"> 
                                        <div className="row">
                                            <div className="col">
                                                <h3>অর্থ গ্রহণ: {payment.created_at}</h3>
                                            </div>
                                            <div className="col text-right"><h4>অর্থ গ্রহণ সম্পূর্ন হয়নি</h4></div>
                                        </div>
                                    </div> :
                                    <div className="card-header text-light bg-success"> 
                                        <div className="row">
                                            <div className="col">
                                                <h3>অর্থ গ্রহণ: {payment.created_at}</h3>
                                            </div>
                                            <div className="col text-right"><h4>অর্থ গ্রহণ সম্পূর্ন হয়েছে</h4></div>
                                        </div>
                                    </div>} 

                                    <div className="card-body">
                                        <div className="col-md-12 offer-show__col">
                                            <div className="row offer-form-table">
                                                <div className="col-md-12">
                                                    <h4 className="color1">বিক্রেতার বিবরণ</h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>বিক্রেতার নাম:</strong></div>
                                                        <div className="col-md-6">{payment.seller.name} </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6"></div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>বিক্রেতার মোবাইল নাম্বর:</strong></div>
                                                        <div className="col-md-6">{payment.seller.mobile}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6"></div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>বিক্রেতার ঠিকানা:</strong></div>
                                                        <div className="col-md-6">{payment.seller.address}</div>
                                                    </div>
                                                </div>
                                    
                                                <div className="col-md-12">
                                                <br></br>
                                                    <h4 className="color1">পণ্যের বিবরণ</h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পণ্যের নাম:</strong></div>
                                                        <div className="col-md-6">{payment.product_name} </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পণ্যের প্রকার:</strong></div>
                                                        <div className="col-md-6">{payment.category}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পণ্যের জাত:</strong></div>
                                                        <div className="col-md-6">{payment.sub_category}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                    <div className="col-md-6"><strong>মোট ওজন:</strong></div>
                                                    <div className="col-md-6">{toBengaliNumber(payment.total_weight)} {payment.weight_unit}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                    <div className="col-md-6"><strong>মূল্য:</strong></div>
                                                    <div className="col-md-6">
                                                        {toBengaliNumber(payment.price_per_unit-(payment.price_per_unit*(payment.discount_price/100)))} টাকা (প্রতি {payment.weight_unit})</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                    <div className="col-md-6"><strong>মোট টাকা:</strong></div>
                                                    <div className="col-md-6">{toBengaliWord(Number(payment.total_amount))} টাকা</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h3>বিক্রেতার বিবরণ</h3>
                                            </div>
                                        </div>
                                        <div className="row mt-2">

                                            <div className="col-1">
                                                <span>ক্রেতার নাম:</span>
                                            </div>
                                            <div className="col">{payment.seller.name}</div>
                                            <div className="col-1">
                                                <span>মোবাইল নম্বর:</span>  
                                            </div>
                                            <div className="col">{toBengaliNumber(payment.seller.mobile)}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>ঠিকানা:</span>  
                                            </div>
                                            <div className="col">{payment.seller.address}</div>
                                        </div><br></br>
                                        <div className="row">
                                            <div className="col">
                                                <h3>পণ্যের বিবরণ</h3>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>পণ্যের নাম:</span>  
                                            </div>
                                            <div className="col">{payment.product_name}</div>
                                            <div className="col-1">
                                                <span>পণ্যের প্রকার:</span>  
                                            </div>
                                            <div className="col font-weight-bold"><h4>{toBengaliNumber(payment.category)}</h4></div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>সম্পূর্ণ ওজন:</span>  
                                            </div>
                                            <div className="col font-weight-bold"><h4>{toBengaliNumber(payment.total_weight)} {payment.weight_unit}</h4></div>
                                            <div className="col-1">
                                                <span>প্যাকেজিং পদ্ধতি:</span>  
                                            </div>
                                            <div className="col">{payment.packaging_method}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>মূল্য:</span>  
                                            </div>
                                            <div className="col font-weight-bold">{toBengaliNumber(payment.price_per_unit)} টাকা({payment.weight_unit} প্রতি)</div>
                                            <div className="col-1">
                                                <span>মোট দাম:</span>  
                                            </div>
                                            <div className="col font-weight-bold">{toBengaliWord(Number(payment.total_amount))} টাকা ((ছাড় মূল্য)</div>
                                        </div>
                                    </div> */}
                                </div>
                        ));
        } else {
            paymentsList=<h1>No Transaction Found</h1>
        }
        return (
            <div className="mt-3">
                
                {paymentsList}
                <Pagination page={this.page} pageChange={this.handlePageChange} count={this.count} limit={this.limit} />

            </div>
        )
    }
}

if (document.getElementById('react_buyer_payment')) {
    ReactDOM.render(<BuyerPaymentList />, document.getElementById('react_buyer_payment'));
}

