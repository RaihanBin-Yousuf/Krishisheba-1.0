import React, { Component } from 'react'
import Login from './Login';
import UserServices from '../../services/UserServices';
export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginForm: false,
        }
        this.showCheck = this.showCheck.bind(this);
        this.loginFormClose = this.loginFormClose.bind(this);
    }

    loginFormClose() {
        this.setState({
            loginForm: false,
        })
    }

    showCheck() {
        if(this.props.data.authUser.data == "not found") {
            this.setState({ ['loginForm']: true})
        } else {
            if(this.props.data.authUser.access_to == 0 || this.props.data.authUser.access_to == 99) {
                $.notify({message : 'লেনদেনের জন্য অনুমতি প্রদান করা হইনি। অনুগ্রহ করে অপেক্ষা করুন'}, {type: 'danger'});
            } else {
                this.props.showPage('checkout');
            }
        }
    }
    
    
    render() {
        let pdata = this.props.data.addCart;
        let cartList = '';
        cartList = pdata.map(product=> (
        cartList = <tr key={product.id}>
                        <td className="pro-thumbnail"><a href="#"><img src={"/storage/posts/"+product.product_image} className="img-fluid" alt="Product"/></a></td>
                        <td className="pro-title">{product.category}</td>
                        <td className="pro-price"><span>৳ {product.price_per_unit}</span></td>
                        <td className="available-quantity"><span>{product.total_unit == 'Nan' ? 'Nan': product.total_unit} {product.total_unit == 'Nan' ? '' : product.weight_unit}</span></td>
                        <td className="pro-quantity"><div className="pro-qty"><input type="number" value={product.quantity} onChange={(e)=>this.props.updateQty(e, product)} /></div></td> 
                        <td className="pro-each-total"><span>৳ {product.total_each_price}</span></td>
                        <td className="pro-service">৳ {product.each_total_fee}</td>
                        <td className="pro-remove"><a onClick={()=>this.props.removeProduct(product)}><i className="fa fa-trash-o"></i></a></td>
                    </tr>
                    ));

        return (
            <div>
                {this.props.data.authUser.data == "not found" && this.state.loginForm ? <Login loginFormClose={this.loginFormClose} setAuthUser={this.props.setAuthUser}/>: ''}
               <section> 
                    <div className="page-section section mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <form action="#">
                                        <div className="cart-table table-responsive mb-40">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="pro-thumbnail">পণ্যের ছবি</th>
                                                        <th className="pro-title">পণ্যের বিভাগ</th>
                                                        <th className="pro-price">পণ্যের দাম </th>
                                                        <th className="available-quantity">বাকি পরিমাণ</th>
                                                        <th className="pro-quantity">পরিমাণ</th>
                                                        <th className="pro-each-total">মোট </th>
                                                        <th className="pro-service">পরিসেবা চার্জ</th>
                                                        <th className="pro-remove">সরান</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cartList}
                                                </tbody>
                                            </table>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                           <div className="discount-coupon">
                                                <h4>ছাড়ের কুপন কোড</h4>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <input type="text" placeholder="Coupon Code"/>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <input href="#" type="submit" value="প্রয়োগ করুন"/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 d-flex">
                                            <div className="cart-summary">
                                                <div className="cart-summary-wrap">
                                                    <h4>সারসংক্ষেপ</h4>
                                                    <p>মোট <span>৳ {this.props.data.subTotal}.00</span></p>
                                                    <p>পরিসেবা চার্জ <span>৳ {this.props.data.serviceFee}.00</span></p>
                                                    <h2>সর্বমোট <span>৳ {this.props.data.totalPrice}.00</span></h2>
                                                </div>
                                                <div className="cart-summary-button">
                                                    <button className="checkout-btn">লেনদেন</button>
                                                    <button onClick={this.showCheck}>বিল পরিশোধ</button>
                                                    <button className="update-btn">Update Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
