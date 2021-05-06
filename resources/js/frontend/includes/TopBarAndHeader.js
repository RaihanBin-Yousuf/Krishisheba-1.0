import React, { Component } from 'react'

export default class TopBarAndHeader extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    Whyus() {
        const anchor = document.querySelector('#whyus')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'nearest',delay: 5000, inline: 'nearest' })
    }
    
    OurServices() {
        const anchor = document.querySelector('#services')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'nearest',delay: 5000, inline: 'nearest' })
    }

    loginPage() {
        window.location.href = "/login";
    }

    registerPage() {
        window.location.href = "/register";
    }

    slideUp() {
        $("#cart-floating-box").stop().slideUp(1000);
    }

    slideDown() {
        $("#cart-floating-box").stop().slideDown(1000);
    }
    
    render() {
        let pdata = this.props.data ? this.props.data.count : '0';
        return (
            <div>
                <section>
                    <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
                        <div className="container d-flex">
                            <div className="contact-info mr-auto">
                                <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                                <i className="icofont-phone"></i> +1 5589 55488 55
                            </div>
                            <button className="login-btn"><a onClick={this.loginPage}><i className="icofont-user-suited"> <b>প্রবেশ</b></i></a></button>
                            <a onClick={this.registerPage} className="get-started-btn scrollto">নিবন্ধন</a> 
                        </div>
                    </div>
                    <header id="header" className="fixed-top">
                        <div className="container d-flex align-items-center">
                        <h1 className="logo mr-auto"><a href="">কৃষিসেবা</a></h1>
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                                <li><a href="">হোম</a></li>
                                <li><a onClick={this.Whyus}>আমাদের সমাধান</a></li>
                                <li><a onClick={this.OurServices}>সেবাসমূহ</a></li>
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
                                <div className="shopping-cart" id="shopping-cart" onMouseEnter={this.slideDown} onMouseLeave={this.slideUp}>
                                    <a href="cart.html">
                                        <div className="cart-icon d-inline-block">
                                            <span className="icon_bag_alt"></span>
                                        </div>
                                        <div className="cart-info d-inline-block">
                                            <p>Shopping Cart 
                                                <span>
                                                    {pdata} items
                                                </span>
                                            </p>
                                        </div>
                                    </a>
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
