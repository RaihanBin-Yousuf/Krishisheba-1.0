import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="shop-page-container mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 order-3 order-lg-2">
                                    <div className="sidebar-area">
                                        <div className="sidebar">
                                            <div className="row form-filter_product">
                                                <div className="col-sm-2 col-md-3 col-lg-2">
                                                    <img className="form-filter-image" src="/frontend-asset/market/icons/riceicon1.png" alt="2591fa81cf29ff7bd588c662fd620b1e" />
                                                </div>
                                                <div className="col-sm-6 col-md-9 col-lg-10">
                                                    <h4>ধান</h4>
                                                </div>
                                            </div>
                                            <div className="mb-15 form-group">
                                                <label className="filter__label" htmlFor="name">প্রকারভেদ</label>
                                                <select name="search[2]" id="search_2" className="form-control">
                                                    <option value="">নির্বাচন করুন</option>  
                                                    <option value="5">আউশ ধান</option>
                                                    <option value="4">আমন ধান</option>
                                                    <option value="25">বোরো ধান</option>
                                                </select>
                                            </div>
                                    
                                            <div className="mb-15 form-group">
                                                <label className="filter__label" htmlFor="name">ধানের জাত</label>
                                                <select name="search[3]" id="search_3" className="form-control">
                                                    <option value="">নির্বাচন করুন</option>  
                                                    <option value="111">বিআর১ (চান্দিনা)</option>
                                                    <option value="136">বিআর২ (মালা)</option>
                                                    <option value="135">বিআর৩ (বিপ্লব)</option>
                                                    <option value="134">বিআর৪ (ব্রিশাইল)</option>
                                                    <option value="131">বিআর৭(ব্রি বালাম)</option>
                                                    <option value="130">বিআর৮ (আশা)</option>
                                                    <option value="129">বিআর৯ (সুফলা)</option>
                                                    <option value="128">বিআর১৯ (মঙ্গল)</option>
                                                    <option value="54">বিআর২৩ (দিশারী)</option>
                                                    <option value="979">বিআর২৫ (নয়াপাজাম)</option>
                                                </select>
                                            </div>
                                            <div className="mb-15 form-group">
                                                <label className="filter__label" htmlFor="name">উৎপাদনের ধরন</label>
                                                <select name="search[120]" id="search_120" className="form-control">
                                                    <option value="">নির্বাচন করুন</option>  
                                                    <option value="435">সমন্বিত উৎপাদনের</option>
                                                    <option value="436">জৈব উৎপাদনের</option>
                                                    <option value="434">প্রচলিত উৎপাদনের </option>
                                                </select>
                                            </div>
                                            <div className="mb-15 form-group">
                                                <label className="control-label">বিভাগ</label> 
                                                <select name="divisions" id="divisions" className="form-control input-lg">
                                                    <option value="">নির্বাচন করুন</option>
                                                    <option value="Barishal">বরিশাল</option>
                                                    <option value="Chattogram">চট্টগ্রাম</option>
                                                    <option value="Dhaka">ঢাকা</option>
                                                    <option value="Khulna">খুলনা</option>
                                                    <option value="Mymensingh">ময়মনসিংহ</option>
                                                    <option value="Rajshahi">রাজশাহী</option>
                                                    <option value="Rangpur">রংপুর</option>
                                                    <option value="Sylhet">সিলেট</option>
                                                </select>
                                            </div>
                                            <div className="mb-15 form-group">
                                                <label className="control-label">জেলা</label> 
                                                <select className="form-control input-lg" name="" id="distr">
                                                    <option value="">নির্বাচন করুন</option>
                                                </select>
                                            </div>
                                            <div className="mb-15 form-group">
                                                <label htmlFor="field-5" className="control-label">থানা</label> 
                                                <select className="form-control input-lg" name="Police Station" id="polic_sta">
                                                    <option>নির্বাচন করুন</option>
                                                </select>
                                            </div>	
                                            <div className="mb-15 form-group">
                                                <label className="filter__label" htmlFor="immediate_delivery">জরুরী বিতরণ</label>
                                                <input className="immediate-delivery-checkbox" type="checkbox" value="1" id="immediate_delivery_value" />
                                            </div>	
                                            <div className="mb-15 form-group">
                                                <label className="filter__label" htmlFor="ppt">মূল্য পরিসীমা</label> (৳)<br/>
                                                <input type="text" name="interval[price_per_ton][start]" id="interval_price_per_ton_start" className="form-interval" step="any" />
                                                <span style={{fontSize: '10px'}}>থেকে</span>
                                                <input type="text" name="interval[price_per_ton][end]" id="interval_price_per_ton_end" className="form-interval" step="any" />
                                            </div>	
                                            <div className="mb-15 form-group">
                                                <h3 className="sidebar-title">Filter By Price</h3>
                                                <div className="sidebar-price">
                                                    <div id="price-range"></div>
                                                    <input type="text" id="price-amount" readOnly/>
                                                </div>
                                            </div>
                                            <div className="compare-btns">
                                                <a href="#" className="clear-all">Clear all</a>
                                                <a href="#" className="compare">Search</a>
                                            </div>
                                        </div> 
                                    </div>
                                </div>


                                <div className="col-lg-8 order-1 order-lg-2 mb-sm-35 mb-xs-35">
                                    <div className="shop-header mb-35">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">
                                                <div className="view-mode-icons mb-xs-10">
                                                    <a className="active" href="#" data-target="grid"><i className="fa fa-th"></i></a>
                                                    <a href="#" data-target="list"><i className="fa fa-list"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-12 d-flex flex-column flex-sm-row justify-content-between align-items-left align-items-sm-center">
                                                <div className="sort-by-dropdown d-flex align-items-center mb-xs-10">
                                                    <p className="mr-10">Sort By: </p>
                                                    <select name="sort-by" id="sort-by" className="nice-select">
                                                        <option value="0">Sort By Popularity</option>
                                                        <option value="0">Sort By Average Rating</option>
                                                        <option value="0">Sort By Newness</option>
                                                        <option value="0">Sort By Price: Low to High</option>
                                                        <option value="0">Sort By Price: High to Low</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shop-product-wrap grid row no-gutters mb-35">
                                        {/* @foreach($allpaddy as $paddy) */}
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                                <div className="gf-product shop-grid-view-product">
                                                    <div className="image">
                                                        <a href="paddy_detailspage/{{$paddy['id']}}">
                                                            <span className="onsale">Sale!</span>
                                                            {/* <img src="{{asset('storage/posts/'.$paddy->product_image)}}"style="width:200px; height:186px;"/> */}
                                                        </a>
                                                        <div className="product-hover-icons">
                                                            <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                            <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                            <a href="paddy_detailspage/{{$paddy['id']}}" data-tooltip="Quick view"> <span className="icon_search"></span> </a>
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-categories">
                                                            <a>পণ্য:paddyproduct_name</a>
                                                        </div>
                                                        <div className="product-categories">
                                                            <a>পণ্যের প্রকার: paddycategory </a>
                                                        </div>
                                                        <h3 className="product-title"><a href="">মোট ওজন: paddy total_weight paddy weight_unit </a></h3>
                                                        <div className="price-box">
                                                            <span className="discounted-price">৳ paddy  price_per_unit  টাকা  $paddy weight_unit</span>
                                                        </div>
                                                    </div>	
                                                </div>
                                                <div className="gf-product shop-list-view-product">
                                                    <div className="image">
                                                        <a href="">
                                                            <span className="onsale">Sale!</span>
                                                            {/* <img src="{{asset('storage/posts/'.$paddy->product_image)}}"style="width:270px; height:250px;"/> */}
                                                        </a>
                                                        <div className="product-hover-icons">
                                                        </div>
                                                    </div>
                                                    <div className="product-content">
                                                        <div className="product-categories">
                                                            <a>Fast Foods</a>,
                                                            <a>Vegetables</a>
                                                        </div>
                                                        <h3 className="product-title"><a href="">Ornare sed consequat nisl</a></h3>
                                                        <div className="price-box mb-20">
                                                            <span className="main-price">$89.00</span>
                                                            <span className="discounted-price">$80.00</span>
                                                        </div>
                                                        <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
                                                        <div className="list-product-icons">
                                                            <a href="#"> <span className="icon_search"></span> </a>
                                                            <a href="#" data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                            <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                            <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                        </div>
                                                    </div>
                                                </div>		
                                            </div>
                                        {/* @endforeach						 */}
                                    </div>

                                    <div className="pagination-container">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="pagination-content text-center">
                                                        <ul>
                                                            <li><a className="active"></a> $allpaddy links </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade quick-view-modal-container" id="quick-view-modal-container" tabIndex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 col-xs-12">
                                            <div className="product-image-slider">
                                                <div className="tab-content product-large-image-list" id="myTabContent">
                                                    <div className="tab-pane fade show active" id="single-slide1" role="tabpanel" aria-labelledby="single-slide-tab-1">
                                                        <div className="single-product-img img-full">
                                                            <img src="/frontend-asset/assets_2/images/products/product01.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="single-slide2" role="tabpanel" aria-labelledby="single-slide-tab-2">
                                                        <div className="single-product-img img-full">
                                                            <img src="/frontend-asset/assets_2/images/products/product02.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="single-slide3" role="tabpanel" aria-labelledby="single-slide-tab-3">
                                                        <div className="single-product-img img-full">
                                                            <img src="/frontend-asset/assets_2/images/products/product03.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="single-slide4" role="tabpanel" aria-labelledby="single-slide-tab-4">
                                                        <div className="single-product-img img-full">
                                                            <img src="/frontend-asset/assets_2/images/products/product04.jpg" className="img-fluid" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product-small-image-list"> 
                                                    <div className="nav small-image-slider" role="tablist">
                                                        <div className="single-small-image img-full">
                                                            <a data-toggle="tab" id="single-slide-tab-1" href="#single-slide1"><img src="/frontend-asset/assets_2/images/products/product01.jpg"
                                                                className="img-fluid" alt=""/></a>
                                                        </div>
                                                        <div className="single-small-image img-full">
                                                            <a data-toggle="tab" id="single-slide-tab-2" href="#single-slide2"><img src="/frontend-asset/assets_2/images/products/product02.jpg"
                                                                className="img-fluid" alt=""/></a>
                                                        </div>
                                                        <div className="single-small-image img-full">
                                                            <a data-toggle="tab" id="single-slide-tab-3" href="#single-slide3"><img src="/frontend-asset/assets_2/images/products/product03.jpg"
                                                                className="img-fluid" alt=""/></a>
                                                        </div>
                                                        <div className="single-small-image img-full">
                                                            <a data-toggle="tab" id="single-slide-tab-4" href="#single-slide4"><img src="/frontend-asset/assets_2/images/products/product04.jpg"
                                                                alt=""/></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 col-xs-12">
                                            <div className="product-feature-details">
                                                <h2 className="product-title mb-15">Kaoreet lobortis sagittis laoreet</h2>

                                                <h2 className="product-price mb-15"> 
                                                    <span className="main-price">$12.90</span> 
                                                    <span className="discounted-price"> $10.00</span>
                                                </h2>

                                                <p className="product-description mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                                                <div className="cart-buttons mb-20">
                                                    <div className="pro-qty mr-10">
                                                        <input type="text" value="1"/>
                                                    </div>
                                                    <div className="add-to-cart-btn">
                                                        <a href="#"><i className="fa fa-shopping-cart"></i> Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="social-share-buttons">
                                                    <h3>share this product</h3>
                                                    <ul>
                                                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a className="google-plus" href="#"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                                                    </ul>
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
