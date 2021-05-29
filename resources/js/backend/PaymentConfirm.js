import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PaymentService from '../../js/services/PaymentService';
import Pagination from '../../js/components/Paginations';
import Bkashbackend from './Bkashbackend';
// const { toBengaliNumber, toBengaliWord} = require('bengali-number');

export default class PaymentConfirm extends Component {
    constructor(props) {
        super(props);
        this.state={
            payments: [],
            show_bkash: 'nope',
            single_payment: []
        };
        this.page = 1;
        this.limit = 10;
        this.count = 0;
        this.sort = 'id';
        this.sortdirection = 'desc';
        this.query = '';
        this.handlePageChange = this.handlePageChange.bind(this);
        this.getPaymentList = this.getPaymentList.bind(this);
        this.showBkash = this.showBkash.bind(this);
        this.closeBkash = this.closeBkash.bind(this);
    }

    componentDidMount() {
        this.getPaymentList();
    }

    showBkash(data) {
        this.setState({
            ['single_payment'] : data,
            ['show_bkash'] : 'bkash' })
    }

    closeBkash(data) {
        this.setState({
            ['show_bkash']: data,
        });
        if(data == 'payment') {
            this.getPaymentList();
        }
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
        const getpayments = await PaymentService.getListByAdmin({
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
        console.log('this.state.payments :>> ', this.state.payments);
        if(this.state.payments) {
            paymentsList = this.state.payments.map(payment=>(
                paymentsList = <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col">
                                                <h3>Payment: {payment.created_at}</h3>
                                            </div>
                                            <div className="col text-right">
                                                <div onClick={()=>this.showBkash(payment)} className="btn btn-danger font-light">Bkash Payment</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h3>Seller</h3>
                                            </div>
                                            <div className="col">
                                                <h3>Buyer</h3>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-1">
                                                <span>Seller Name:</span>
                                            </div>
                                            <div className="col">{payment.seller.name}</div>
                                            <div className="col-1">
                                                <span>Buyer Name:</span>
                                            </div>
                                            <div className="col">{payment.buyer.name}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>Contact No:</span>  
                                            </div>
                                            <div className="col font-weight-bold"><h4>{payment.seller.mobile}</h4></div>
                                            <div className="col-1">
                                                <span>Contact No:</span>  
                                            </div>
                                            <div className="col">{payment.buyer.mobile}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>Address:</span>  
                                            </div>
                                            <div className="col font-weight-bold"><h4>{payment.seller.address}</h4></div>
                                            <div className="col-1">
                                                <span>Address:</span>  
                                            </div>
                                            <div className="col">{payment.buyer.address}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>Total Weight:</span>  
                                            </div>
                                            <div className="col font-weight-bold"><h4>{payment.total_weight}</h4></div>
                                            <div className="col-1">
                                                <span>Weight Unit:</span>  
                                            </div>
                                            <div className="col">{payment.weight_unit}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>Price Per Unit:</span>  
                                            </div>
                                            <div className="col font-weight-bold"><h4>{payment.price_per_unit} Taka</h4></div>
                                            <div className="col-1">
                                                <span>Total Amount:</span>  
                                            </div>
                                            <div className="col">{payment.total_amount} Taka</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>Service Fee:</span>  
                                            </div>
                                            <div className="col font-weight-bold"><h4>{payment.service_fee} Taka</h4></div>
                                            <div className="col-1">
                                                <span>Product Name:</span>  
                                            </div>
                                            <div className="col">{payment.product_name}</div>
                                        </div>
                                    </div>
                                </div>
                        ));
        } else {
            paymentsList=<h1>No Transaction Found</h1>
        }
        return (
            <div className="mt-3">
                {this.state.show_bkash == 'bkash' ? <Bkashbackend data= {this.state.single_payment} closeBkash={this.closeBkash}/>: ''}
                {paymentsList}
                <Pagination page={this.page} pageChange={this.handlePageChange} count={this.count} limit={this.limit} />

            </div>
        )
    }
}

if (document.getElementById('react_payment')) {
    ReactDOM.render(<PaymentConfirm />, document.getElementById('react_payment'));
}

