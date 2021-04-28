import React, { Component } from 'react'

export default class TabSlider extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <div class="slider tab-slider mb-35">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="tab-slider-wrapper">
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a class="nav-item nav-link active" id="featured-tab" data-toggle="tab" href="#featured" role="tab"
                                                aria-selected="true">Featured</a>
                                            <a class="nav-item nav-link" id="new-arrival-tab" data-toggle="tab" href="#new-arrivals" role="tab"
                                                aria-selected="false">New Arrival</a>
                                            <a class="nav-item nav-link" id="nav-onsale-tab" data-toggle="tab" href="#on-sale" role="tab"
                                                aria-selected="false">On Sale</a>
                                        </div>
                                    </nav>
                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                            {/* <!--=======  tab slider container  =======--> */}
                                            
                                            <div class="tab-slider-container">
                                                {/* <!--=======  single tab slider item  =======--> */}
                                                <div class="single-tab-slider-item">
                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="/frontend-asset/assets_2/images/products/product01.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a class="active" href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <img src="/frontend-asset/assets_2/images/products/product02.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                                    
                                        
                                                </div>
                                                {/* <!--=======  End of single tab slider product  =======--> */}

                                                {/* <!--=======  single tab slider item  =======--> */}
                                                <div class="single-tab-slider-item">
                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <img src="/frontend-asset/assets_2/images/products/product03.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="/frontend-asset/assets_2/images/products/product04.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                                    
                                        
                                                </div>
                                                {/* <!--=======  End of single tab slider product  =======--> */}

                                                {/* <!--=======  single tab slider item  =======--> */}
                                                <div class="single-tab-slider-item">
                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="/frontend-asset/assets_2/images/products/product05.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <img src="/frontend-asset/assets_2/images/products/product06.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a class="active" href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                                </div>
                                                {/* <!--=======  End of single tab slider product  =======--> */}

                                                {/* <!--=======  single tab slider item  =======--> */}
                                                <div class="single-tab-slider-item">
                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="/frontend-asset/assets_2/images/products/product07.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======-->

                                                    <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="/frontend-asset/assets_2/images/products/product08.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                                </div>
                                                {/* <!--=======  End of single tab slider product  =======--> */}

                                                {/* <!--=======  single tab slider item  =======--> */}

                                                <div class="single-tab-slider-item">
                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="/frontend-asset/assets_2/images/products/product09.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a class="active" href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======-->

                                                    <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="/frontend-asset/assets_2/images/products/product10.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                                    
                                        
                                                </div>
                                                {/* <!--=======  End of single tab slider product  =======--> */}
                                            </div>
                                                
                                            {/* <!--=======  End of tab slider container  =======--> */}
                                        </div>
                                        
                                        <div class="tab-pane fade" id="new-arrivals" role="tabpanel" aria-labelledby="new-arrival-tab">
                                            {/* <!--=======  tab slider container  =======--> */}
                                                                            
                                            <div class="tab-slider-container">
                                                {/* <!--=======  single tab slider item  =======--> */}
                                                <div class="single-tab-slider-item">
                                                        {/* <!--=======  tab slider sub product  =======--> */}
                                                        
                                                        <div class="gf-product tab-slider-sub-product">
                                                            <div class="image">
                                                                <a href="single-product.html">
                                                                    <img src="/frontend-asset/assets_2/images/products/product03.jpg" class="img-fluid" alt=""/>
                                                                </a>
                                                                <div class="product-hover-icons">
                                                                    <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                    <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                    <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                    <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <div class="product-categories">
                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                </div>
                                                                <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                                <div class="price-box">
                                                                    <span class="discounted-price">$80.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                        {/* <!--=======  End of tab slider sub product  =======-->

                                                        <!--=======  tab slider sub product  =======--> */}
                                                        
                                                        <div class="gf-product tab-slider-sub-product">
                                                            <div class="image">
                                                                <a href="single-product.html">
                                                                    <span class="onsale">Sale!</span>
                                                                    <img src="/frontend-asset/assets_2/images/products/product04.jpg" class="img-fluid" alt=""/>
                                                                </a>
                                                                <div class="product-hover-icons">
                                                                    <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                    <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                    <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                    <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <div class="product-categories">
                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                </div>
                                                                <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                                <div class="price-box">
                                                                    <span class="main-price">$89.00</span>
                                                                    <span class="discounted-price">$80.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                        {/* <!--=======  End of tab slider sub product  =======--> */}
                                                        
                                            
                                                </div>
                                                {/* <!--=======  End of single tab slider product  =======-->
                                                <!--=======  single tab slider item  =======--> */}
                                                <div class="single-tab-slider-item">
                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="/frontend-asset/assets_2/images/products/product01.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a class="active" href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
{/*                                                 
                                                    <!--=======  End of tab slider sub product  =======-->

                                                    <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <img src="/frontend-asset/assets_2/images/products/product02.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                                    
                                        
                                                </div>
                                                {/* <!--=======  End of single tab slider product  =======-->

                                                <!--=======  single tab slider item  =======--> */}
                                                <div class="single-tab-slider-item">
                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="/frontend-asset/assets_2/images/products/product05.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======-->

                                                    <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <img src="/frontend-asset/assets_2/images/products/product06.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a class="active" href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}
                                                </div>
                                                {/* <!--=======  End of single tab slider product  =======--> */}

                                                {/* <!--=======  single tab slider item  =======--> */}
                                                <div class="single-tab-slider-item">
                                                    {/* <!--=======  tab slider sub product  =======--> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="/frontend-asset/assets_2/images/products/product07.jpg" class="img-fluid" alt=""/>
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    {/* <!--=======  End of tab slider sub product  =======--> */}

                                                    {/* <!--=======  tab slider sub product  =======--></div> */}
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product08.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->
                                                </div>
                                                <!--=======  End of single tab slider product  =======-->

                                                <!--=======  single tab slider item  =======-->

                                                <div class="single-tab-slider-item">
                                                    <!--=======  tab slider sub product  =======-->
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product09.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a class="active" href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->

                                                    <!--=======  tab slider sub product  =======-->
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product10.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->
                                                    
                                        
                                                </div>
                                                <!--=======  End of single tab slider product  =======-->
                                            </div>
                                                    
                                            <!--=======  End of tab slider container  =======-->
                                        </div>

                                        <div class="tab-pane fade" id="on-sale" role="tabpanel" aria-labelledby="nav-onsale-tab">
                                            <!--=======  tab slider container  =======-->
                                                                            
                                            <div class="tab-slider-container">
                                                <!--=======  single tab slider item  =======-->

                                                <div class="single-tab-slider-item">
                                                        <!--=======  tab slider sub product  =======-->
                                                        
                                                        <div class="gf-product tab-slider-sub-product">
                                                            <div class="image">
                                                                <a href="single-product.html">
                                                                    <span class="onsale">Sale!</span>
                                                                    <img src="{{ asset('frontend-asset/assets_2/images/products/product09.jpg') }}" class="img-fluid" alt="">
                                                                </a>
                                                                <div class="product-hover-icons">
                                                                    <a class="active" href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                    <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                    <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                    <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <div class="product-categories">
                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                </div>
                                                                <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                                <div class="price-box">
                                                                    <span class="main-price">$89.00</span>
                                                                    <span class="discounted-price">$80.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                        <!--=======  End of tab slider sub product  =======-->

                                                        <!--=======  tab slider sub product  =======-->
                                                        
                                                        <div class="gf-product tab-slider-sub-product">
                                                            <div class="image">
                                                                <a href="single-product.html">
                                                                    <span class="onsale">Sale!</span>
                                                                    <img src="{{ asset('frontend-asset/assets_2/images/products/product10.jpg') }}" class="img-fluid" alt="">
                                                                </a>
                                                                <div class="product-hover-icons">
                                                                    <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                    <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                    <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                    <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                                </div>
                                                            </div>
                                                            <div class="product-content">
                                                                <div class="product-categories">
                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                </div>
                                                                <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                                <div class="price-box">
                                                                    <span class="main-price">$89.00</span>
                                                                    <span class="discounted-price">$80.00</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                        <!--=======  End of tab slider sub product  =======-->
                                                        
                                            
                                                </div>
                                                <!--=======  End of single tab slider product  =======-->
                                                <!--=======  single tab slider item  =======-->
                                                <div class="single-tab-slider-item">
                                                    <!--=======  tab slider sub product  =======-->
                                                    
                                                    <div class="gf-product gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product01.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a class="active" href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->

                                                    <!--=======  tab slider sub product  =======-->
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product02.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->
                                                    
                                        
                                                </div>
                                                <!--=======  End of single tab slider product  =======-->
                                                <!--=======  single tab slider item  =======-->
                                                <div class="single-tab-slider-item">
                                                    <!--=======  tab slider sub product  =======-->
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product03.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->

                                                    <!--=======  tab slider sub product  =======-->
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product04.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->
                                                    
                                        
                                                </div>
                                                <!--=======  End of single tab slider product  =======-->
                                                <!--=======  single tab slider item  =======-->
                                                <div class="single-tab-slider-item">
                                                    <!--=======  tab slider sub product  =======-->
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product05.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->

                                                    <!--=======  tab slider sub product  =======-->
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product06.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a class="active" href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->
                                                </div>
                                                <!--=======  End of single tab slider product  =======-->

                                                <!--=======  single tab slider item  =======-->
                                                <div class="single-tab-slider-item">
                                                    <!--=======  tab slider sub product  =======-->
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product07.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->

                                                    <!--=======  tab slider sub product  =======-->
                                                    
                                                    <div class="gf-product tab-slider-sub-product">
                                                        <div class="image">
                                                            <a href="single-product.html">
                                                                <span class="onsale">Sale!</span>
                                                                <img src="{{ asset('frontend-asset/assets_2/images/products/product08.jpg') }}" class="img-fluid" alt="">
                                                            </a>
                                                            <div class="product-hover-icons">
                                                                <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                                                <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                                                <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                                                <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <div class="product-categories">
                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                            </div>
                                                            <h3 class="product-title"><a href="single-product.html">Sed tempor ehicula non commodo</a></h3>
                                                            <div class="price-box">
                                                                <span class="main-price">$89.00</span>
                                                                <span class="discounted-price">$80.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                    <!--=======  End of tab slider sub product  =======-->
                                                </div>
                                                <!--=======  End of single tab slider product  =======-->
                                            </div>
                                                    
                                            <!--=======  End of tab slider container  =======-->
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
