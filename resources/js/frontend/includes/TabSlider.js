import React, { Component } from 'react'
import ManagePostService from '../../services/ManagePostService';
import Slider from "react-slick";
const { toBengaliNumber} = require('bengali-number');

export default class TabSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feature: [],
            new_arrival: [],
            on_sale: [],
            farmer_sale: [],
        }
        this.getManagePost = this.getManagePost.bind(this);
    }
    
    componentDidMount() {
        this.getManagePost();
    }

    async getManagePost() {
        const res =await ManagePostService.list({'type': 'feature'});
        this.setState({
            ['feature']: res.feature,
            ['new_arrival']: res.new,
            ['on_sale']: res.sale,
            ['farmer_sale']: res.farmer,
        })

    }

    render() {
        let pdata = this.props.data ? this.props.data.count : '0';
        let farmerlist = '';
        farmerlist = this.state.farmer_sale.map(farmer=> (
            farmerlist = <div className="gf-product tab-slider-sub-product" key={farmer.id}>
                                <div className="image">
                                    <a onClick={()=>this.props.viewDetails(farmer)}>
                                        <img src={'/storage/posts/'+farmer.product_image} className="postsimage"/>
                                    </a>
                                    <div className="product-hover-icons ">
                                        <a onClick={()=>this.props.addProduct(farmer)} data-tooltip="ব্যাগে যুক্ত করুন"> <span className="icon_cart_alt"></span></a>
                                        <a href="#" data-tooltip="পছন্দের তালিকায় রাখুন"> <span className="icon_heart_alt"></span> </a>
                                        <a onClick={()=>this.props.viewDetails(farmer)} data-tooltip="বিস্তারিত দেখুন" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্য: {farmer.product_name}</a>
                                    </div>
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্যের প্রকার: {farmer.category}</a>
                                    </div>
                                    <h3 className="product-title"><a href="single-product.html">মোট ওজন: {toBengaliNumber(farmer.total_weight)} {farmer.weight_unit}</a></h3>
                                    <div className="price-box">
                                        <span className="discounted-price">১ {farmer.weight_unit} ৳ {toBengaliNumber(farmer.price_per_unit)} </span>
                                    </div>
                                </div>
                            </div>
                            ));
        let featureList = '';
        featureList = this.state.feature.map(feature=> (
            featureList = <div className="gf-product tab-slider-sub-product" key={feature.id}>
                                <div className="image">
                                    <a onClick={()=>this.props.viewDetails(feature)}>
                                        <img src={'/storage/posts/'+feature.product_image} className="postsimage"/>
                                    </a>
                                    <div className="product-hover-icons ">
                                        <a onClick={()=>this.props.addProduct(feature)} data-tooltip="ব্যাগে যুক্ত করুন"> <span className="icon_cart_alt"></span></a>
                                        <a href="#" data-tooltip="পছন্দের তালিকায় রাখুন"> <span className="icon_heart_alt"></span> </a>
                                        <a onClick={()=>this.props.viewDetails(feature)} data-tooltip="বিস্তারিত দেখুন" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্য: {feature.product_name}</a>
                                    </div>
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্যের প্রকার: {feature.category}</a>
                                    </div>
                                    <h3 className="product-title"><a href="single-product.html">মোট ওজন: {toBengaliNumber(feature.total_weight)} {feature.weight_unit}</a></h3>
                                    <div className="price-box">
                                        <span className="discounted-price">১ {feature.weight_unit} ৳ {toBengaliNumber(feature.price_per_unit)} </span>
                                    </div>
                                </div>
                            </div>
                            ));
        let newArrivalList = '';
        newArrivalList = this.state.new_arrival.map(arrival=> (
            newArrivalList = <div className="gf-product tab-slider-sub-product" key={arrival.id}>
                                <div className="image">
                                    <a onClick={()=>this.props.viewDetails(feature)}>
                                    <span className="onsale bg-success"><h4>{toBengaliNumber(arrival.discount_price)}%</h4></span>
                                        <img src={'/storage/posts/'+arrival.product_image} className="postsimage"/>
                                    </a>
                                    <div className="product-hover-icons">
                                        <a onClick={()=>this.props.addProduct(arrival)} data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                        <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                        <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                        <a onClick={()=>this.props.viewDetails(arrival)} data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্য: {arrival.product_name}</a>
                                    </div>
                                    <div className="product-categories">
                                        <a href="shop-left-sidebar.html">পণ্যের প্রকার: {arrival.category}</a>
                                    </div>
                                    <h3 className="product-title"><a href="single-product.html">মোট ওজন: {toBengaliNumber(arrival.total_weight)} {arrival.weight_unit}</a></h3>
                                    <div className="price-box ">
                                        {/* <span className="discounted-price"> </span> */}
                                        <h4>১ {arrival.weight_unit} </h4><span className="main-price">৳ {toBengaliNumber(arrival.price_per_unit)}</span>
                                                <span className="discounted-price">৳ {toBengaliNumber(arrival.price_per_unit-(arrival.price_per_unit*(arrival.discount_price/100)))}</span>
                                    </div>
                                </div>
                            </div>
                                ));
        let onSaleList = '';
        onSaleList = this.state.on_sale.map(sale=> (
            onSaleList = 
                            <div className="gf-product tab-slider-sub-product" key={sale.id}>
                                <div className="image">
                                    <a onClick={()=>this.props.viewDetails(feature)}>
                                    <span className="onsale">Sale!</span>
                                    <img src={'/storage/posts/'+sale.product_image} className="postsimage"/>
                                    </a>
                                    <div className="product-hover-icons">
                                        <a onClick={()=>this.props.addProduct(sale)} data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                        <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                        <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                        <a onClick={()=>this.props.viewDetails(sale)} data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                        <div className="product-categories">
                                            <a href="shop-left-sidebar.html">পণ্য: {sale.product_name}</a>
                                        </div>
                                        <div className="product-categories">
                                            <a href="shop-left-sidebar.html">পণ্যের প্রকার: {sale.category}</a>
                                        </div>
                                        <h3 className="product-title"><a href="single-product.html">মোট ওজন: {toBengaliNumber(sale.total_weight)} {sale.weight_unit}</a></h3>
                                        <div className="price-box">
                                            <span className="discounted-price">১ {sale.weight_unit} ৳ {toBengaliNumber(sale.price_per_unit)} </span>
                                        </div>
                                </div>
                            </div>
                                ));

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
                }
            ]
            };
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
                                                aria-selected="true">নতুন সংযোজন</a>
                                            <a className="nav-item nav-link" id="new-arrival-tab" data-toggle="tab" href="#new-arrivals" role="tab"
                                                aria-selected="false">ছাড় % পণ্য</a>
                                            <a className="nav-item nav-link" id="nav-onsale-tab" data-toggle="tab" href="#on-sale" role="tab"
                                                aria-selected="false">বিক্রিত পণ্য</a>
                                            <a className="nav-item nav-link" id="farmer-tab" data-toggle="tab" href="#farmer" role="tab"
                                                aria-selected="false">কৃষকদের পণ্য তালিকা</a>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                            <div className="tab-slider-container bg-white shadow">
                                                <Slider {...settings}>
                                                        {featureList}
                                                </Slider>
                                            </div>
                                        </div>
                                        {/* start */}
                                        <div className="tab-pane fade" id="new-arrivals" role="tabpanel" aria-labelledby="new-arrival-tab">   
                                            <div className="tab-slider-container bg-white shadow">
                                                <Slider {...settings}>
                                                        {newArrivalList}
                                                </Slider>
                                            </div>
                                        </div>
                                        {/* end  */}
                                        <div className="tab-pane fade" id="on-sale" role="tabpanel" aria-labelledby="nav-onsale-tab">
                                            <div className="tab-slider-container bg-white shadow">
                                                <Slider {...settings}>
                                                        {onSaleList}
                                                </Slider>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="farmer" role="tabpanel" aria-labelledby="farmer-tab">
                                            <div className="tab-slider-container bg-white shadow">
                                                <Slider {...settings}>
                                                        {farmerlist}
                                                </Slider>
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
