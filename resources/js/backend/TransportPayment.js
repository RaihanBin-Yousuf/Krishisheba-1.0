import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import TransportServices from '../../js/services/TransportServices';
import Pagination from '../../js/components/Paginations';
import TransportBkashBackend from './TransportBkashBackend';
import UserServices from '../../js/services/UserServices';
const { toBengaliNumber, toBengaliWord} = require('bengali-number');

export default class TransportPayment extends Component {
    constructor(props) {
        super(props);
        this.state={
            transports: [],
            show_bkash: 'nope',
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
        this.showBkash = this.showBkash.bind(this);
        this.closeBkash = this.closeBkash.bind(this);
        this.getAuthUser = this.getAuthUser.bind(this);

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

    showBkash(data) {
        this.setState({
            ['single_payment'] : data,
            ['show_bkash'] : 'bkash' })
    }

    closeBkash(data) {
        
        this.setState({
            ['show_bkash']: data,
        })
        if(data == 'transport') {
            this.getAuthUser();
        }
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
        const getTransport = await TransportServices.getListByAdmin({
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
        console.log('this.state.transports :>> ', this.state.transports);
        if(this.state.transports) {
            transportsList = this.state.transports.map(transport=>(
                transportsList = <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col">
                                                <h3>Payment : {transport.created_at}</h3>
                                            </div>
                                            <div className="col text-right">
                                                <div onClick={()=>this.showBkash(transport)} className="btn btn-danger font-light">বিকাশ পেমেন্ট</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="col-md-12 offer-show__col">
                                            <div className="row offer-form-table">
                                                <div className="col-md-6">
                                                    <h4 className="color1">গাড়ির মালিকের তথ্য</h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <h4 className="color1">পেমেন্ট তথ্য</h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>মালিকের নাম:</strong></div>
                                                        <div className="col-md-6">{transport.transport.name} </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পরিবহন চার্জ::</strong></div>
                                                        <div className="col-md-6">{transport.transport_charge} </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>মোবাইল নাম্বর:</strong></div>
                                                        <div className="col-md-6">{transport.transport.mobile}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পরিসেবা চার্জ:</strong></div>
                                                        <div className="col-md-6">{transport.transport_service_fee}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>ঠিকানা:</strong></div>
                                                        <div className="col-md-6">{transport.transport.address}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>অর্থ প্রদান:</strong></div>
                                                        <div className="col-md-6">{transport.transport_charge-transport.transport_service_fee} টাকা (পরিসেবা চার্জ ছাড়া)</div>
                                                    </div>
                                                </div>
                                    
                                             <div className="col-md-12">
                                                <br></br>
                                                    <h4 className="color1">পণ্যের বিবরণ</h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পণ্যের নাম:</strong></div>
                                                        <div className="col-md-6">{transport.product_name} </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পণ্যের প্রকার:</strong></div>
                                                        <div className="col-md-6">{transport.category}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                        <div className="col-md-6"><strong>পণ্যের জাত:</strong></div>
                                                        <div className="col-md-6">{transport.sub_category}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="row">
                                                    <div className="col-md-6"><strong>মোট ওজন:</strong></div>
                                                    <div className="col-md-6">{toBengaliNumber(transport.total_weight)} কেজি</div>
                                                    </div>
                                                </div>
                                              </div>
                                        </div>
                                    </div>
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
                    <div className="col-4 text-right">
                        <h3>
                            <span className="font-weight-bold"> Your Balance:</span>
                        </h3>
                    </div>
                        <h3> {this.state.auth_user.amount} Taka</h3>
                </div>
                {this.state.show_bkash=='bkash' ? <TransportBkashBackend data= {this.state.single_payment} closeBkash={this.closeBkash}/>: ''}
                {transportsList}

                <Pagination page={this.page} pageChange={this.handlePageChange} count={this.count} limit={this.limit} />

            </div>
        )
    }
}


if (document.getElementById('react_transport')) {
    ReactDOM.render(<TransportPayment />, document.getElementById('react_transport'));
}
