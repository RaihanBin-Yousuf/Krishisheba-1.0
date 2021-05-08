import React, { Component } from 'react'
import ManagePostService from '../../services/ManagePostService';

export default class TabSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feature: [],
            new_arrival: [],
            on_sale: []
        }
        this.getManagePost = this.getManagePost.bind(this);
    }
    
    componentDidMount() {
        this.getManagePost();
    }

    async getManagePost() {
        const res =await ManagePostService.list({'type': 'feature'});
        console.log('response on page :>> ', res);
        this.setState({
            ['feature']: res.feature,
            ['new_arrival']: res.new,
            ['on_sale']: res.sale,
        })

    }

    render() {
        let pdata = this.props.data ? this.props.data.count : '0';
        let featureList = '';
        featureList = this.state.feature.map(feature=> (
            featureList = <div className="gf-product tab-slider-sub-product">
                                <div className="image">
                                    <a href="single-product.html">
                                        <img src={'/storage/posts/'+feature.product_image} className="postsimage"/>
                                    </a>
                                    <div className="product-hover-icons">
                                        <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                        <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                        <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                        <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্য: {feature.product_name}</a>
                                    </div>
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্যের প্রকার: {feature.category}</a>
                                    </div>
                                    <h3 className="product-title"><a href="single-product.html">মোট ওজন: {feature.total_weight} {feature.weight_unit}</a></h3>
                                    <div className="price-box">
                                        <span className="discounted-price">১ {feature.weight_unit} ৳ {feature.price_per_unit} </span>
                                    </div>
                                </div>
                            </div>
                            ));
        let newArrivalList = '';
        newArrivalList = this.state.new_arrival.map(arrival=> (
            newArrivalList = <div className="gf-product tab-slider-sub-product">
                                <div className="image">
                                    <a href="single-product.html">
                                        <img src={'/storage/posts/'+arrival.product_image} className="postsimage"/>
                                    </a>
                                    <div className="product-hover-icons">
                                        <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                        <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                        <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                        <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্য: {arrival.product_name}</a>
                                    </div>
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্যের প্রকার: {arrival.category}</a>
                                    </div>
                                    <h3 className="product-title"><a href="single-product.html">মোট ওজন: {arrival.total_weight} {arrival.weight_unit}</a></h3>
                                    <div className="price-box">
                                        <span className="discounted-price">১ {arrival.weight_unit} ৳ {arrival.price_per_unit} </span>
                                    </div>
                                </div>
                            </div>
                                ));
        let onSaleList = '';
        onSaleList = this.state.on_sale.map(sale=> (
            onSaleList = <div className="gf-product tab-slider-sub-product">
                            <div className="image">
                                <a href="single-product.html">
                                <img src={'/storage/posts/'+sale.product_image} className="postsimage"/>
                                </a>
                                <div className="product-hover-icons">
                                    <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                    <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                    <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                    <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                </div>
                            </div>
                            <div className="product-content">
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্য: {sale.product_name}</a>
                                    </div>
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্যের প্রকার: {sale.category}</a>
                                    </div>
                                    <h3 className="product-title"><a href="single-product.html">মোট ওজন: {sale.total_weight} {sale.weight_unit}</a></h3>
                                    <div className="price-box">
                                        <span className="discounted-price">১ {sale.weight_unit} ৳ {sale.price_per_unit} </span>
                                    </div>
                            </div>
                        </div>
                                ));
        return (
            <div>
                <div className="slider tab-slider mb-35">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tab-slider-wrapper">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="featured-tab" data-toggle="tab" href="#featured" role="tab"
                                                aria-selected="true">Featured</a>
                                            <a className="nav-item nav-link" id="new-arrival-tab" data-toggle="tab" href="#new-arrivals" role="tab"
                                                aria-selected="false">New Arrival</a>
                                            <a className="nav-item nav-link" id="nav-onsale-tab" data-toggle="tab" href="#on-sale" role="tab"
                                                aria-selected="false">On Sale</a>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                            <div className="tab-slider-container slick-initialized slick-slider">
                                                {/* <button className="slick-prev slick-arrow"><i className="fa fa-caret-left"></i></button> */}
                                                <div className="slick-list draggable">
                                                    <div className="slick-track">
                                                        <div className="single-tab-slider-item slick-slide slick-cloned">
                                                            <div className="gf-product tab-slider-sub-product">
                                                                <div className="image">
                                                                    <a href="single-product.html">
                                                                        <span className="onsale">Sale!</span>
                                                                        <img src="/frontend-asset/assets_2/images/products/product01.jpg" className="img-fluid" alt=""/>
                                                                    </a>
                                                                    <div className="product-hover-icons">
                                                                        <a className="active" onClick={this.props.addCount} data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                                        <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                                        <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                                        <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                                                    </div>
                                                                </div>
                                                                <div className="product-content">
                                                                    <div className="product-categories">
                                                                        <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                        <a href="shop-left-sidebar.html">Vegetables</a>
                                                                    </div>
                                                                    <h3 className="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                                    <div className="price-box">
                                                                        <span className="main-price">{pdata}</span>
                                                                        <span className="discounted-price">{pdata}</span>
                                                                    </div>
                                                                </div>  
                                                            </div>
                                                            {featureList}
                                                        </div>
            
                                                    </div>
                                                </div>
                                                {/* <button type="button" className="slick-next slick-arrow"><i className="fa fa-caret-right"></i></button> */}

                                            </div>
                                        </div>
                                        {/* start */}
                                        <div className="tab-pane fade" id="new-arrivals" role="tabpanel" aria-labelledby="new-arrival-tab">
                                        <div className="tab-slider-container slick-initialized slick-slider">
                                                {/* <button className="slick-prev slick-arrow"><i className="fa fa-caret-left"></i></button> */}
                                                <div className="slick-list draggable">
                                                    <div className="slick-track">
                                                        <div className="single-tab-slider-item slick-slide slick-cloned">
                                                            {newArrivalList}
                                                        </div>
            
                                                    </div>
                                                </div>
                                                {/* <button type="button" className="slick-next slick-arrow"><i className="fa fa-caret-right"></i></button> */}

                                            </div>
                                        </div>
                                        {/* end  */}
                                        <div className="tab-pane fade" id="on-sale" role="tabpanel" aria-labelledby="nav-onsale-tab">
                                            <div className="tab-slider-container slick-initialized slick-slider">
                                                <div className="slick-list draggable">
                                                    <div className="slick-track">
                                                        <div className="single-tab-slider-item slick-slide slick-cloned">
                                                            {onSaleList}
                                                        </div>
                                                        
                                                    {/* end  */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
