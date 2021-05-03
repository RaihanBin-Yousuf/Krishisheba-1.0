import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Slider from "react-slick";

// import '../../jquery/main';
export default class TopCategorySlider extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
       
    }
    
    render() {
        
        return (<>
            {/* <Router> */}
                <section>
                    <div className="slider category-slider mb-35">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <h3>top categories</h3>
                                    </div>  
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="category-slider-container slick-initialized slick-slider">
                                            <button className="slick-prev slick-arrow"><i className="fa fa-caret-left"></i></button>
                                        <div className="slick-list draggable">
                                            <div className="slick-track">
                                                        <div className="single-category  slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="/paddy" title="ধান">
                                                                    <img src="/frontend-asset/assets_2/images/categories/paddy-1.png" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="{{ route('paddy.index') }}">ধান</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="single-category  slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="{{ route('rice.index') }}" title="চাউল">
                                                                    <img src="/frontend-asset/assets_2/images/categories/rice.png" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="{{ route('rice.index') }}"> চাউল</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="single-category slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="shop-left-sidebar.html" title="গম">
                                                                    <img src="/frontend-asset/assets_2/images/categories/wheat.png" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="shop-left-sidebar.html"> গম</a>
                                                                </h3>
                                                            </div>
                                                        </div>						                                                                                   
                                                        <div className="single-category slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="shop-left-sidebar.html" title=" শীতকালীন সবজি">
                                                                    <img src="/frontend-asset/assets_2/images/categories/wintervegitables-1.jpg" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="shop-left-sidebar.html">  শীতকালীন সবজি</a>
                                                                </h3>
                                                            </div>
                                                        </div>                                                                                              
                                                        <div className="single-category slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="shop-left-sidebar.html" title="গ্রীষ্মকালীন সবজি">
                                                                    <img src="/frontend-asset/assets_2/images/categories/summerseason-1.jpg" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="shop-left-sidebar.html">গ্রীষ্মকালীন সবজি</a>
                                                                </h3>
                                                            </div>
                                                        </div>                                                                                       
                                                        <div className="single-category slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="shop-left-sidebar.html" title="বারোমাসি সবজি">
                                                                    <img src="/frontend-asset/assets_2/images/categories/alltimevegitable.jpg" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="shop-left-sidebar.html"> বারোমাসি সবজি</a>
                                                                </h3>
                                                            </div>
                                                        </div>                                                      
                                                        <div className="single-category slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="shop-left-sidebar.html" title="Beans">
                                                                    <img src="/frontend-asset/assets_2/images/categories/category7.png" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="shop-left-sidebar.html"> Beans</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="single-category slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="shop-left-sidebar.html" title="Beans">
                                                                    <img src="/frontend-asset/assets_2/images/categories/category7.png" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="shop-left-sidebar.html"> Beans</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="single-category slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="shop-left-sidebar.html" title="Beans">
                                                                    <img src="/frontend-asset/assets_2/images/categories/category7.png" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="shop-left-sidebar.html"> Beans</a>
                                                                </h3>
                                                            </div>
                                                        </div>\
                                                        <div className="single-category slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="shop-left-sidebar.html" title="Beans">
                                                                    <img src="/frontend-asset/assets_2/images/categories/category7.png" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="shop-left-sidebar.html"> Beans</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className="single-category slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="shop-left-sidebar.html" title="Beans">
                                                                    <img src="/frontend-asset/assets_2/images/categories/category7.png" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="shop-left-sidebar.html"> Beans</a>
                                                                </h3>
                                                            </div>
                                                        </div>

                                                        <div className="single-category slick-slide slick-cloned">
                                                            <div className="category-image">
                                                                <a href="shop-left-sidebar.html" title="Beans">
                                                                    <img src="/frontend-asset/assets_2/images/categories/category7.png" className="img-fluid" alt=""/>
                                                                </a>
                                                            </div>
                                                            <div className="category-title">
                                                                <h3>
                                                                    <a href="shop-left-sidebar.html"> Beans</a>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                
                                                    {/* <Slider/> */}
                                            </div>
                                        </div>
                                            <button className="slick-next slick-arrow"><i className="fa fa-caret-right"></i></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <Route path="/paddy" exact  /> */}
            {/* </Router> */}
       
        </>)
    }
}