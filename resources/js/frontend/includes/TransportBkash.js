import React, { Component } from 'react'

export default class TransportBkash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCount: 0,
            adminAccount: [],
            seller: [],
            buyercontact: this.props.data.authUser.mobile,
            buyer : this.props.data.authUser,
            productprice: this.props.data.subTotal,
            servicefee: this.props.data.serviceFee,
            product: this.props.data.addCart[0],
            code: '',
            
        }
        this.setCount = this.setCount.bind(this);
        this.setunCount = this.setunCount.bind(this);
        this.permissionUser = this.permissionUser.bind(this);
        this.sellerDetails = this.sellerDetails.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div className="bkash-background">
                <div className="bkash-cart">
                    <div className="bkash-header ">
                        <img src="/bkash/bkash_payment_logo.png" width="450px" alt="" srcset="" />
                    </div>
                    <div className="bkash-body text-center mt-2">
                        {showContent}
                        <div className="bkash-input mt-5">
                            <form action="" onSubmit={this.handleSubmit}>
                                { this.state.showCount == 1 ?
                                <div className="bkash-first-page">
                                    <div className="text-center font-weight-bold text-light">আপনার বিকাশ অ্যাকাউন্ট নম্বর</div>
                                        <div className="text-center mt-3">
                                            <input type="text" size="35" name="buyercontact" value={this.state.contact} onChange={this.handleInputChange} placeholder="e.g. 01XXXXXX"/>
                                        </div>
                                </div> : '' }
                                {this.state.showCount == 2 ?
                                <div className="bkash-second-page">
                                    <div className="text-center font-weight-bold text-light">গোপন কোড</div>
                                    <div className="text-center mt-3">
                                        <input type="password" onChange={this.handleInputChange} name="code" max="6" size="35" />
                                    </div>
                                </div> : '' }
                                
                                <div className="mt-4">
                                    <div className="text-center text-light"><span className="font-weight-bold">নিশ্চিত</span> ক্লিক করে। আপনি শর্তাদি এবং <span className="font-weight-bold">শর্তগুলিতে সম্মতি দিচ্ছেন।</span></div>
                                </div>
                                <div className="row bkash-btn mt-4">
                                    {this.state.showCount == 2 ?
                                    // <div className="col p-3 btn btn-secondary" >
                                        <button type="submit" className="col p-3 btn btn-secondary">নিশ্চিত করুন</button> :
                                    <div className="col p-3 btn btn-secondary" onClick={this.setCount}>
                                        নিশ্চিত করুন
                                    </div>  }
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
