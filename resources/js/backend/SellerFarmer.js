import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PaymentService from '../../js/services/PaymentService';
import Pagination from '../../js/components/Paginations';
const { toBengaliNumber, toBengaliWord} = require('bengali-number');
import UserServices from '../../js/services/UserServices';
export default class SellerFarmer extends Component {
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
        this.sortdirection = 'desc';
        this.query = '';
        this.handlePageChange = this.handlePageChange.bind(this);
        this.getPaymentList = this.getPaymentList.bind(this);
        this.getAuthUser = this.getAuthUser.bind(this);
    }

    componentDidMount() {
        // this.getPaymentList();
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
        const getpayments = await PaymentService.getListBySellerFarmer({
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
                                                    <h4 className="color1">ক্রেতার বিবরণ</h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>ক্রেতার নাম:</strong></div>
                                                        <div className="col-md-6">{payment.buyer.name} </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6"></div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>মোবাইল নাম্বর:</strong></div>
                                                        <div className="col-md-6">{payment.buyer.mobile}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6"></div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>ঠিকানা:</strong></div>
                                                        <div className="col-md-6">{payment.buyer.address}</div>
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
                                                    <div className="col-md-6"> {toBengaliNumber(payment.price_per_unit-(payment.price_per_unit*(payment.discount_price/100)))} টাকা (প্রতি {payment.weight_unit})</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                    <div className="col-md-6"><strong>মোট টাকা:</strong></div>
                                                    <div className="col-md-6">{toBengaliWord(Number(payment.total_amount))} টাকা</div>
                                                    </div>
                                                </div>
                                                    <div className="col-md-6">
                                                    <div className="row">
                                                    <div className="col-md-6"><strong>পরিসেবা চার্জ:</strong></div>
                                                    <div className="col-md-6">{toBengaliNumber(payment.service_fee)} টাকা</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                    <div className="col-md-6"><strong>সর্বমোট ঢাকা:</strong></div>
                                                    <div className="col-md-6">{toBengaliWord(Number(payment.total_amount-payment.service_fee))} টাকা(পরিসেবা চার্জ ছাড়া)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ));
        } else {
            paymentsList=<h1>No Transaction Found</h1>
        }
        return (
            <div className="mt-3">
                <div className="row mb-4">
                    <div className="col">
                    </div>
                    <div className="col-5 text-left">
                        <h3>
                            <label className="font-weight-bold"> আপনার একাউন্টে জমা হয়েছে:</label>
                        </h3>
                    </div>
                        <h3> {toBengaliNumber(this.state.auth_user.amount)} টাকা</h3>
                </div>
                
                {paymentsList}
                <Pagination page={this.page} pageChange={this.handlePageChange} count={this.count} limit={this.limit} />

            </div>
        )
    }
}

if (document.getElementById('react_selfarmer')) {
    ReactDOM.render(<SellerFarmer />, document.getElementById('react_selfarmer'));
}

