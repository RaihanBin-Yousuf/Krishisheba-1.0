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
        // this.setAuthUser = this.setAuthUser.bind(this);
    }

    componentDidMount() {
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
            this.props.showPage('checkout');
        }
    }
    
    
    render() {
        console.log('this.state :>> ', this.state);
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
                                                        <th className="pro-thumbnail">Image</th>
                                                        <th className="pro-title">Product</th>
                                                        <th className="pro-price">Price</th>
                                                        <th className="available-quantity">Available Quantity</th>
                                                        <th className="pro-quantity">Quantity</th>
                                                        <th className="pro-each-total">Total</th>
                                                        <th className="pro-service">Service fee</th>
                                                        <th className="pro-remove">Remove</th>
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
                                            <div className="calculate-shipping">
                                                <h4>Calculate Shipping</h4>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <select className="nice-select">
                                                                <option>Bangladesh</option>
                                                                <option>China</option>
                                                                <option>country</option>
                                                                <option>India</option>
                                                                <option>Japan</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <select className="nice-select">
                                                                <option>Dhaka</option>
                                                                <option>Barisal</option>
                                                                <option>Khulna</option>
                                                                <option>Comilla</option>
                                                                <option>Chittagong</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <input type="text" placeholder="Postcode / Zip"/>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <input type="submit" value="Estimate"/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="discount-coupon">
                                                <h4>Discount Coupon Code</h4>
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <input type="text" placeholder="Coupon Code"/>
                                                        </div>
                                                        <div className="col-md-6 col-12 mb-25">
                                                            <input type="submit" value="Apply Code"/>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12 d-flex">
                                            <div className="cart-summary">
                                                <div className="cart-summary-wrap">
                                                    <h4>Cart Summary</h4>
                                                    <p>Sub Total <span>${this.props.data.subTotal}.00</span></p>
                                                    <p>Service Fee <span>${this.props.data.serviceFee}.00</span></p>
                                                    <h2>Grand Total <span>${this.props.data.totalPrice}.00</span></h2>
                                                </div>
                                                <div className="cart-summary-button">
                                                    <button onClick={this.showCheck}>Checkout</button>
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
