import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import TransportServices from '../../js/services/TransportServices';
import Pagination from '../../js/components/Paginations';
import TransportBkashBackend from './TransportBkashBackend';

export default class TransportPayment extends Component {
    constructor(props) {
        super(props);
        this.state={
            transports: [],
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
        this.getTransportList = this.getTransportList.bind(this);
        this.showBkash = this.showBkash.bind(this);
        this.closeBkash = this.closeBkash.bind(this);
    }

    componentDidMount() {
        this.getTransportList();
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
            this.getTransportList();
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
                                                <div onClick={()=>this.showBkash(transport)} className="btn btn-danger font-light">Bkash Payment</div>
                                            </div>
                                        </div>
                                    </div>
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
