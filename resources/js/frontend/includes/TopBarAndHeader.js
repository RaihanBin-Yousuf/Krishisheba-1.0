import React, { Component } from 'react'

export default class TopBarAndHeader extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <section>
                    <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
                        <div className="container d-flex">
                            <div className="contact-info mr-auto">
                                <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                                <i className="icofont-phone"></i> +1 5589 55488 55
                            </div>
                            {/* <!-- <div className="social-links">   
                            <a href="login.html" className="User"><i className="icofont-user-suited"></i> <b>প্রবেশ</b></i></a>
                            </div> --> */}
                            {/* <button style="outline: none; background: none; border: none; cursor: pointer;color:#5cb874;font-size:15px"><a href="{{route('login') }}"><i className="icofont-user-suited"></i> <b>প্রবেশ</b></i></a></button> */}
                            
                            <a href="{{ route('register') }}" className="get-started-btn scrollto">নিবন্ধন</a> 
                        </div>
                        {/* </div> */}
                    </div>
                    <header id="header" className="fixed-top">
                        <div className="container d-flex align-items-center">
                        <h1 className="logo mr-auto"><a href="{{ route('home-page-index') }}"href="index.html">কৃষিসেবা</a></h1>
                        {/* <!-- Uncomment below if you prefer to use an image logo -->
                        <!-- <a href="index.html" className="logo mr-auto"><img src="frontend-asset/home_page/img/logo.png') }}" alt="" className="img-fluid"></a>--> */}
                    
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li><a href="{{ route('home-page-index') }}">হোম</a></li>
                                <li><a href="#whyus">আমাদের সমাধান</a></li>
                                <li><a href="#services">সেবাসমূহ</a></li>
                                <li><a href="{{ route('findproduct') }}">পণ্য</a></li>
                                <li><a href="#contact">যোগাযোগ</a></li>
                                <li className="drop-down"><a href="">আমাদের সম্পর্কে আরও</a>
                                    <ul>
                                    <li><a href="{{ route('team') }}">আমাদের টিম</a></li>
                                    <li><a href="whyus.html">আমাদের সমাধান</a></li>
                                    <li><a  href="{{ route('faq') }}">জিজ্ঞাসা</a></li>
                                    </ul>
                                </li>
                                <li></li>
                                <div className="shopping-cart" id="shopping-cart">
                                                    <a href="cart.html">
                                                        <div className="cart-icon d-inline-block">
                                                            <span className="icon_bag_alt"></span>
                                                        </div>
                                                        <div className="cart-info d-inline-block">
                                                            <p>Shopping Cart 
                                                                <span>
                                                                    0 items
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </a>
                                                    {/* <!-- end of shopping cart -->

                                                    <!-- cart floating box --> */}
                                                    <div className="cart-floating-box" id="cart-floating-box">
                                                        <div className="cart-items">
                                                            <div className="cart-float-single-item d-flex">
                                                                <span className="remove-item"><a href="#"><i className="fa fa-times"></i></a></span>
                                                                <div className="cart-float-single-item-image">
                                                                    <a href="single-product.html"><img src="frontend-asset/assets_2/images/products/product01.jpg" className="img-fluid" alt=""/></a>
                                                                </div>
                                                                <div className="cart-float-single-item-desc">
                                                                    <p className="product-title"> <a href="single-product.html">Duis pulvinar obortis eleifend </a></p>
                                                                    <p className="price"><span className="count">1x</span> $20.50</p>
                                                                </div>
                                                            </div>
                                                            <div className="cart-float-single-item d-flex">
                                                                <span className="remove-item"><a href="#"><i className="fa fa-times"></i></a></span>
                                                                <div className="cart-float-single-item-image">
                                                                    <a href="single-product.html"><img src="frontend-asset/assets_2/images/products/product02.jpg" className="img-fluid" alt=""/></a>
                                                                </div>
                                                                <div className="cart-float-single-item-desc">
                                                                    <p className="product-title"> <a href="single-product.html">Fusce ultricies dolor vitae</a></p>
                                                                    <p className="price"><span className="count">1x</span> $20.50</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            <div className="floating-cart-btn text-center">
                                                                <a className="float-right" href="">View Cart</a>
                                                            </div>
                                                    </div>
                                                </div>
                            </ul>
                        </nav>
                        </div>
                    </header>
                </section>
            </div>
        )
    }
}
