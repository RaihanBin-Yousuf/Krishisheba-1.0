import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import TransportServices from '../services/TransportServices';
import Pagination from '../components/Paginations';
import TransportBkashBackend from './TransportBkashBackend';
import UserServices from '../services/UserServices';

export default class BuyerTransportPayList extends Component {
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

    async isDelivered(data) {
        const getTransport = await TransportServices.getDelivered(data);
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
        const getTransport = await TransportServices.getListByTransportBuyer({
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
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col">
                                                <h3>Payment : {transport.created_at}</h3>
                                            </div>
                                            <div className="col text-right">
                                                <div onClick={()=>this.isDelivered(transport)} className="btn btn-danger font-light">If you get  the delivered product please Click</div>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="card-header">
                                        {/* <div className="row"> */}
                                            <div className="col">
                                                <h3>Payment : {transport.created_at}</h3>
                                            </div>
                                            
                                        
                                        {/* </div> */}
                                    </div>}
                                    <div className="card-body">
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
                                    </div>
                                </div>
                        ));
        } else {
            transportsList=<h1>No Transaction Found</h1>
        }
        return (
            <div className="mt-3">
                {transportsList}
                <Pagination page={this.page} pageChange={this.handlePageChange} count={this.count} limit={this.limit} />
            </div>
        )
    }
}


if (document.getElementById('react_buyer_transport_pay_list')) {
    ReactDOM.render(<BuyerTransportPayList />, document.getElementById('react_buyer_transport_pay_list'));
}
