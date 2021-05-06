import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import $ from 'jquery';
export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
      
    }
    slideUp() {
        $("#cart-floating-box").stop().slideUp(1000);
    }
    slideDown() {
        $("#cart-floating-box").stop().slideDown(1000);
    }
    render() {
        let pdata = this.props.data ? this.props.data.count : '0';
        let spantag = <span> itemer {pdata}</span>
        return (
            <div className="shopping-cart" id="shopping-cart" onMouseEnter={this.slideDown} onMouseLeave={this.slideUp}>
                <a >
                    <div className="cart-icon d-inline-block">
                        <span className="icon_bag_alt"></span>
                    </div>
                    <div className="cart-info d-inline-block">
                        <p>{pdata}Shopping Cart 
                            {spantag}
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
                                <p className="product-title"> <a href="single-product.html"></a></p>
                                <p className="price"><span className="count">{pdata}x</span> $20.50</p>
                            </div>
                        </div>
                        <div className="cart-float-single-item d-flex">
                            <span className="remove-item"><a href="#"><i className="fa fa-times"></i></a></span>
                            <div className="cart-float-single-item-image">
                                <a href="single-product.html"><img src="frontend-asset/assets_2/images/products/product02.jpg" className="img-fluid" alt=""/></a>
                            </div>
                            <div className="cart-float-single-item-desc">
                                <p className="product-title"> <a href="single-product.html"></a></p>
                                <p className="price"><span className="count">1x</span> $20.50</p>
                            </div>
                        </div>
                    </div>
                        <div className="floating-cart-btn text-center">
                            <a className="float-right" href="">View Cart</a>
                        </div>
                </div>
            </div>
        )
    }
}


if (document.getElementById('react-shopping-cart')) {
    ReactDOM.render(<ShoppingCart />, document.getElementById('react-shopping-cart'));
}

