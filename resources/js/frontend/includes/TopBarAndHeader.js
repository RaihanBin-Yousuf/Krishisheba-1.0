import React, { Component } from 'react'
import UserServices from '../../services/UserServices';
const { toBengaliNumber} = require('bengali-number');

export default class TopBarAndHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartShow: false,
        }
        this.onCartShow = this.onCartShow.bind(this);
        this.viewCart = this.viewCart.bind(this);
        this.onlogout = this.onlogout.bind(this);
    }

    componentDidMount() {
        // this.onlogout();
    }

    async onlogout() {
        const logout = await UserServices.logout({'logout': 'user'});
        if(logout.success) {
            this.props.getAuthUser();
        }
    }


    viewCart() {

        $("#cart-floating-box").stop().slideUp(1000);
        this.props.showPage('cart');
    }

    pageOnClickScroller(id) {
        const anchor = document.querySelector('#'+id)
        anchor.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest'});
    }

    onClickPage(url) {
        window.location.href = "/"+url;
    }

    onCartShow() {
        if(this.state.cartShow== false) {
            $("#cart-floating-box").stop().slideDown(1000);
            this.setState({ ['cartShow']:true});
        } else {
            $("#cart-floating-box").stop().slideUp(1000);
            this.setState({ ['cartShow']:false});

        }
    }
    
    render() {
        // console.log('this.props in header :>> ', this.props);
        let authUser = this.props.data.authUser.data;
        // let pdata = this.props.data ? this.props.data.count : '0';
        let cartCount = this.props.data.addCart.length;
        // console.log('this.props.data.addCart.length :>> ', );
        let addCartList = '';
        addCartList = this.props.data.addCart.map(product=> (
        addCartList = <div className="cart-float-single-item d-flex" key={product.id}>
                            <span className="remove-item"><a onClick={()=>this.props.removeProduct(product)}><i className="fa fa-times"></i></a></span>
                            <div className="cart-float-single-item-image">
                                <a onClick={()=>this.props.viewDetails(product)}><img src={'/storage/posts/'+product.product_image} className="imgcart" alt=""/></a>
                            </div>
                            <div className="cart-float-single-item-desc" onClick={()=>this.props.viewDetails(product)}>
                                <p className="product-title"> <a >{product.product_name} </a> {product.discount_price > 0 ?
                                <span className="main-price-shoopingbag">৳ {toBengaliNumber(product.price_per_unit)}</span>: ''}</p>
                                <p className="price"><span className="count">{toBengaliNumber(product.quantity)} x </span> ৳{toBengaliNumber(product.price_per_unit_with_discount)}
                               
                                </p>
                            </div>
                        </div>
                        ));
        return (
            <div>
                <div className="fixed-top" className="header-top pt-10 pb-10 pt-lg-10 pb-lg-10 pt-md-10 pb-md-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center text-sm-left">
                                <div className="lang-currency-dropdown">
                                    <div className="header-contact d-flex">
                                            <div className="phone-icon">
                                                <img src="frontend-asset/assets_2/images/icon-phone.png" className="img-fluid" alt=""/>
                                            </div>
                                            <div className="phone-number">
                                                Phone: <span className="number"><a href="tel:8801*********">+8801*********</a></span>
                                            </div>
                                            <div style={{paddingRight: "15px"}}>
                                            </div>
                                            <div className="phone-icon">
                                                <img src="frontend-asset/assets_2/images/email.png" className="img-fluid" alt=""/>
                                            </div>
                                            <div className="phone-number">
                                                Email: <span className="number"><a href="mailto:krishisheva@gmail.com">krishisheva@gmail.com</a></span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12  text-center text-sm-right">
                                <div className="header-top-menu">
                                    <ul>
                                    {authUser == "not found" ?
                                    <>
                                        <button className="login-btn"><a onClick={()=>this.onClickPage('login')}><i className="icofont-user-suited"> <b>প্রবেশ</b></i></a></button>
                                        {/* বাহির */}
                                        <a onClick={()=>this.onClickPage('register')} className="get-started-btn scrollto">নিবন্ধন</a> 
                                    </> : 
                                    <>
                                        <button className="login-btn"><a onClick={()=>this.onClickPage('login')}><i className="icofont-user-suited"> <b>আমার অ্যাকাউন্ট</b></i></a></button>
                                        {/* বাহির */}
                                        <a onClick={this.onlogout} className="get-started-btn scrollto">বাহির</a> 
                                    </> }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom header-bottom-one header-sticky">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-sm-12 col-xs-12 text-lg-left">
                                <div className="logo">
                                      {/* <img src="frontend-asset/assets_2/images/circle-2.png" className="img-fluid" alt=""/> */}
                                         <h1 className="logotext"><a onClick={()=>this.props.showPage(null)}>কৃষিসেবা</a></h1>
                                </div>
                            </div>
                            <div className="fixed-top" className="col-md-10 col-sm-12 col-xs-12">                        
                                <div className="main-menu">
                                    <div className="mean-push"></div>
                                    <nav>
                                        <ul>
                                            <li className="menu-item"><a onClick={()=>this.props.showPage(null)}>হোম</a></li>
                                            <li className="menu-item"><a href="*" onClick={()=>this.pageOnClickScroller('whyus')}>আমাদের সমাধান</a></li>
                                            <li className="menu-item"><a href="*" onClick={()=>this.pageOnClickScroller('services')}>সেবাসমূহ</a></li>
                                            <li className="menu-item"><a href="*" onClick={()=>this.pageOnClickScroller('contact')}>যোগাযোগ</a></li>
                                            {/* <li><a onClick={()=>this.props.showPage('findProducts')}>পণ্য</a></li> */}
                                            <li className="menu-item-has-children"><a href="#">আমাদের সম্পর্কে আরও</a>
                                                <ul className="sub-menu">
                                                    <li><a href="*" onClick={()=>this.props.showPage('team')}>আমাদের টিম</a></li>
                                                    <li><a href="*" onClick={()=>this.props.showPage('faq')}>জিজ্ঞাসা</a></li>
                                                </ul>
                                            </li>
                                             <li><a onClick={()=>this.props.showPage('map')}>পরিবহন ভাড়া করুন</a></li>         
                                        </ul>
                                        {cartCount >0 ?
                                        <div className="shopping-cart" id="shopping-cart"  >
                                            <a onClick={this.onCartShow}>
                                                <div style={{paddingLeft: "15px"}} className="cart-icon d-inline-block">
                                                    <span className="icon_bag_alt"></span>
                                                </div>
                                                <div className="cart-info d-inline-block" >
                                                    <p>বাজারের ব্যাগ {this.state.cartShow?<i className="pl-3 fa fa-times"></i> : ''}
                                                        <span>
                                                            {toBengaliNumber(this.props.data.addCart.length)} টি পণ্য
                                                        </span>
                                                    </p>
                                                </div>
                                            </a>
                                            <div className="cart-floating-box bg-white" id="cart-floating-box">
                                                <div className="cart-items ">
                                                    {addCartList}
                                                </div>

                                                <div className="cart-calculation">
                                                <div className="calculation-details">
                                                    {/* <p>পরিসেবা চার্জ <span>৳{toBengaliNumber(this.props.data.serviceFee)}</span></p>
                                                    <hr></hr> */}
                                                    <p>সর্বমোট <span>৳{toBengaliNumber(this.props.data.totalPrice)}</span></p>
                                                </div>
                                                    <div className="floating-cart-btn text-center">
                                                        <a onClick={this.props.showCheck}>লেনদেন</a>
                                                        <a className="float-right" onClick={this.viewCart}>ব্যাগে দেখুন </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>: ''}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}