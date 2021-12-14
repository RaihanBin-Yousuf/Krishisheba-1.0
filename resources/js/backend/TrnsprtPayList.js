import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import TransportServices from '../services/TransportServices';
import Pagination from '../components/Paginations';
import UserServices from '../services/UserServices';
const { toBengaliNumber, toBengaliWord} = require('bengali-number');

export default class TrnsprtPayList extends Component {
    constructor(props) {
        super(props);
        this.state={
            transports: [],
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
        this.getTransportList = this.getTransportList.bind(this);
        this.isDelivered = this.isDelivered.bind(this);
        this.downloadPaymentScript = this.downloadPaymentScript.bind(this);

    }

    componentDidMount() {
        this.getAuthUser();
    }

    async getAuthUser() {
        const user = await UserServices.authUser();
        this.setState({
            ['auth_user']: user,
        },()=>{this.getTransportList();})

    }

    async downloadPaymentScript(transport) {
        
        const res = await TransportServices.downloadScript(transport);
    }

    async isDelivered(data) {
        const getTransport = await TransportServices.paymentHistory(data);
        this.getTransportList();
    }

    handlePageChange(event) {
        const target = event.target;
        const page = target.getAttribute('data-page');
        const lastPage = Math.ceil(this.count / this.limit);
        if ( 1 <= page && page <= lastPage && page != this.page ) {
            this.page = page;
            this.getTransportList();
        }
    }

    async getTransportList() {
        const getTransport = await TransportServices.paymentHistory({
            query : this.state.query,
            sort : this.sort,
            direction : this.sortdirection,
            page: this.page,
            limit: this.limit,
        });
        console.log('getTransport :>> ', getTransport);
        this.page = getTransport.current_page;
        this.limit = getTransport.per_page;
        this.count = getTransport.total;
        this.setState({
            ['transports']: getTransport.data,
        })
    }
    render() {
        let transportsList = '';
        console.log('this.state.transports in buyer:>> ', this.state.transports);
        if(this.state.transports) {
            transportsList = this.state.transports.map(transport=>(
                transportsList = <div className="card">
                                    {transport.is_delivered == '0' ?
                                    <div className="card-header bg-danger text-light">
                                        <div className="row">
                                            <div className="col">
                                                <h3>Payment : {transport.created_at}</h3>
                                            </div>
                                            
                                            <div className="col text-right">
                                                <h4>ক্রেতা এখনো পণ্যটি পাননি।</h4>
                                            </div>
                                            <div className="col-1 mt-1" onClick={()=>this.downloadPaymentScript(transport)}>
                                                <i className="fas fa-download"></i>
                                            </div>
                                        </div>
                                    </div> :
                                    transport.is_paid == '1' ?
                                    <div className="card-header bg-success text-light">
                                        <div className="row">
                                            <div className="col">
                                                <h3>Payment : {transport.created_at}</h3>
                                            </div>
                                            
                                            <div className="col text-right">
                                                <h4>অর্থপ্রদান সম্পন্ন হয়েছে।</h4>
                                            </div>
                                            <div className="col-1 mt-1" onClick={()=>this.downloadPaymentScript(transport)}>
                                                <i className="fas fa-download"></i>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="card-header  bg-warning">
                                            <div className="row">
                                            <div className="col">
                                                <h3>Payment : {transport.created_at}</h3>
                                            </div>
                                            <div className="col text-right">
                                                <h4>দয়া করে লেনদেনের জন্য অপেক্ষা করুন।</h4>
                                            </div>
                                            <div className="col-1 mt-1" onClick={()=>this.downloadPaymentScript(transport)}>
                                                <i className="fas fa-download"></i>
                                            </div>
                                        </div>
                                    </div>}
                                    <div className="card-body">
                                        <div className="col-md-12 offer-show__col">
                                            <div className="row offer-form-table">
                                                <div className="col-md-6">
                                                    <h4 className="color1">বিক্রেতার বিবরণ</h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <h4 className="color1">ক্রেতার বিবরণ</h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>বিক্রেতার নাম:</strong></div>
                                                        <div className="col-md-6">{transport.seller.name} </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>ক্রেতার নাম:</strong></div>
                                                        <div className="col-md-6">{transport.buyer.name} </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>বিক্রেতার মোবাইল নাম্বর:</strong></div>
                                                        <div className="col-md-6">{transport.seller.mobile}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>ক্রেতার মোবাইল নাম্বর:</strong></div>
                                                        <div className="col-md-6">{transport.buyer.mobile}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>বিক্রেতার ঠিকানা:</strong></div>
                                                        <div className="col-md-6">{transport.seller.address}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>ক্রেতার ঠিকানা:</strong></div>
                                                        <div className="col-md-6">{transport.buyer.address}</div>
                                                    </div>
                                                </div>
                                    
                                                <div className="col-md-6">
                                                <br></br>
                                                    <h4 className="color1">পণ্যের বিবরণ</h4>
                                                </div>
                                                <div className="col-md-6">
                                                <br></br>
                                                    <h4 className="color1">পেমেন্ট তথ্য</h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পণ্যের নাম:</strong></div>
                                                        <div className="col-md-6">{transport.payment.product_name} </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পরিবহন ফি:</strong></div>
                                                        <div className="col-md-6">{transport.transport_charge} টাকা</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পণ্যের প্রকার:</strong></div>
                                                        <div className="col-md-6">{transport.payment.category}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পরিসেবা চার্জ:</strong></div>
                                                        <div className="col-md-6">{transport.transport_service_fee} টাকা</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পণ্যের জাত:</strong></div>
                                                        <div className="col-md-6">{transport.payment.sub_category}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>মোট টাকা:</strong></div>
                                                        <div className="col-md-6">{transport.transport_charge-transport.transport_service_fee} টাকা (পরিসেবা চার্জ ছাড়া)</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                    <div className="col-md-6"><strong>মোট ওজন:</strong></div>
                                                    <div className="col-md-6">{toBengaliNumber(transport.payment.total_weight)} {transport.payment.weight_unit}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <h3>TransPort</h3>
                                            </div>
                                            <div className="col">
                                                <h3>Buyer</h3>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-1">
                                                <span>transport Name:</span>
                                            </div>
                                            <div className="col">{transport.transport.name}</div>
                                            <div className="col-1">
                                                <span>Buyer Name:</span>
                                            </div>
                                            <div className="col">{transport.buyer.name}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>Contact No:</span>  
                                            </div>
                                            <div className="col font-weight-bold"><h4>{transport.transport.mobile}</h4></div>
                                            <div className="col-1">
                                                <span>Contact No:</span>  
                                            </div>
                                            <div className="col">{transport.buyer.mobile}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>Address:</span>  
                                            </div>
                                            <div className="col font-weight-bold"><h4>{transport.transport.address}</h4></div>
                                            <div className="col-1">
                                                <span>Address:</span>  
                                            </div>
                                            <div className="col">{transport.buyer.address}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>Transport Charge:</span>  
                                            </div>
                                            <div className="col font-weight-bold"><h4>{transport.transport_charge}  Taka</h4></div>
                                            <div className="col-1">
                                                <span>Service Fee:</span>  
                                            </div>
                                            <div className="col">{transport.transport_service_fee}  Taka</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-1">
                                                <span>Total Amount:</span>  
                                            </div>
                                            <div className="col">{transport.transport_charge+transport.transport_service_fee} Taka</div>
                                        </div>
                                    </div> */}
                                </div>
                        ));
        } else {
            transportsList=<h1>No Transaction Found</h1>
        }
        return (
            <div className="mt-3">
                 <div className="row mb-4">
                    <div className="col">
                    </div>
                    <div className="col-5 text-right">
                        <h3>
                            <span className="font-weight-bold"> আপনার একাউন্টে জমা হয়েছে:</span>
                        </h3>
                    </div>
                        <h3> {toBengaliNumber(this.state.auth_user.amount)} টাকা</h3>
                </div>
                {transportsList}
                <Pagination page={this.page} pageChange={this.handlePageChange} count={this.count} limit={this.limit} />
            </div>
        )
    }
}


if (document.getElementById('react_transport_pay_list')) {
    ReactDOM.render(<TrnsprtPayList />, document.getElementById('react_transport_pay_list'));
}
