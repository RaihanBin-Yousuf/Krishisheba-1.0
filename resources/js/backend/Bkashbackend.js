import React, { Component } from 'react';
// import UserServices from '../../services/UserServices';
import PaymentService from '../../js/services/PaymentService';

export default class Bkashbackend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCount: 0,
            code: "123456",
            seller_contact: this.props.data.seller.mobile,
            payment_id: this.props.data.id,
            accept_payment: 1,
            seller_id: this.props.data.seller.id,
            marchent_contact: this.props.data.admin.mobile,
            amount: parseInt(this.props.data.total_amount),
            seller_name: this.props.data.seller.name,
            service_fee: parseInt(this.props.data.service_fee),
            total_amount: parseInt(this.props.data.total_amount) + parseInt(this.props.data.service_fee),
            
        }
        this.setCount = this.setCount.bind(this);
        this.setunCount = this.setunCount.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setunCount() {
        this.setState({ ['showCount']: 0},()=>{this.props.closeBkash(false);});
    }

    setCount() {
        const count = this.state.showCount+1;
        this.setState({ ['showCount']: count});
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    async handleSubmit(event) {
        console.log('this.state.code :>> ', this.state.code.length);
        event.preventDefault();
        const digits_only = string => [...string].every(c => '0123456789'.includes(c));
        if(this.state.seller_contact.length == 11 && digits_only(this.state.seller_contact)) {
            if(this.state.code.length == 6) {
                const digits_only = string => [...string].every(c => '0123456789'.includes(c));
                if(digits_only(this.state.code)) {
                    const res =await PaymentService.acceptPayment(this.state);
                    if(res.success) {
                        this.setState({ ['showCount']: 0},()=>{this.props.closeBkash('payment');});
                        // this.setunCount();
                    }
                } else {
                    $.notify({message: 'Please Enter only Digit code'}, {type: 'warning'});
                }
            } else {
                $.notify({message: 'Please Enter Six digit Code'}, {type: 'warning'});
            }
        } else {
            $.notify({message: 'Invalid Number'}, {type: 'danger'});
        }
    }

    render() {
        console.log('this.props.data :>> ', this.props.data);
        let showContent = '';
        if(this.state.showCount == 0) {
            showContent = <div className="bkash-full-details w-75 p-2 ml-5 text-light mt-4">
                            <p><span className="font-weight-bold">Send To: </span>{this.state.seller_name}</p>
                            <p><span className="font-weight-bold">বিক্রেতা অ্যাকাউন্ট নম্বর: </span>{this.state.seller_contact}</p>
                            <p><span className="font-weight-bold">Amount: </span>৳ {this.state.amount}</p>
                            <p><span className="font-weight-bold">Service Fee: </span>৳ {this.state.service_fee}</p>
                        </div>
        } else {
            showContent = <div className="bkash-total-details bg-white p-3">
                            <div className="row">
                                <div className="col">
                                    <h2>Send to:</h2><h4><span className="font-weight-bold"> {this.state.seller_contact}</span> </h4>
                                </div>
                                <div className="col">
                                    Total Amount<h1>৳ {this.state.total_amount}</h1>
                                </div>
                            </div>
                        </div>
        }
        return (
            <div className="backend">
                <div className="backend-bkash-background">
                    <div className="bkash-cart">
                        <div className="bkash-header ">
                            <img src="/bkash/bkash_payment_logo.png" width="450px" alt="" srcSet="" />
                        </div>
                        <div className="bkash-body text-center mt-2">
                            {showContent}
                            <div className="bkash-input mt-5">
                                <form action="" onSubmit={this.handleSubmit}>
                                    { this.state.showCount == 1 ?
                                    <div className="bkash-first-page">
                                        <div className="text-center font-weight-bold text-light">আপনার বিকাশ অ্যাকাউন্ট নম্বর</div>
                                            <div className="text-center mt-3">
                                                <input type="text" size="35" name="marchent_contact" value={this.state.marchent_contact} onChange={this.handleInputChange} placeholder="e.g. 01XXXXXX"/>
                                            </div>
                                    </div> : '' }
                                    {this.state.showCount == 2 ?
                                    <div className="bkash-second-page">
                                        <div className="text-center font-weight-bold text-light">গোপন কোড</div>
                                        <div className="text-center mt-3">
                                            <input type="password" onChange={this.handleInputChange} value={this.state.code} name="code" max="6" size="35" />
                                        </div>
                                    </div> : '' }
                                    
                                    <div className="mt-4">
                                        <div className="text-center text-light"><span className="font-weight-bold">নিশ্চিত</span> ক্লিক করে। আপনি শর্তাদি এবং <span className="font-weight-bold">শর্তগুলিতে সম্মতি দিচ্ছেন।</span></div>
                                    </div>
                                    <div className="row bkash-btn mt-4">
                                        {this.state.showCount == 2 ?
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
            </div>
       )
    }
}
