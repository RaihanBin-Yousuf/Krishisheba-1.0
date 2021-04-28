import React, { Component } from 'react'

export default class TopCategorySlider extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <section>
                    <div className="slider category-slider mb-35">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* <!--=======  category slider section title  =======-->                    */}
                                    <div className="section-title">
                                        <h3>top categories</h3>
                                    </div>               
                                    {/* <!--=======  End of category slider section title  =======-->                */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* <!--=======  category container  =======--> */}
                                    <div className="category-slider-container">

                                        {/* <!--=======  single category  =======--> */}
                                        
                                        <div className="single-category">
                                            <div className="category-image">
                                                <a href="{{ route('paddy.index') }}" title="ধান">
                                                    <img src="/frontend-asset/assets_2/images/categories/paddy-1.png" className="img-fluid" alt=""/>
                                                </a>
                                            </div>
                                            <div className="category-title">
                                                <h3>
                                                    <a href="{{ route('paddy.index') }}">ধান</a>
                                                </h3>
                                            </div>
                                        </div>
                                        
                                        {/* <!--=======  End of single category  =======-->

                                        <!--=======  single category  =======-->
                                        <!-- ধান চাউল গম ভুট্টা শীতকালীন সবজি গৃষ্ম কালীন সবজি বারোমাসি সবজি শীতকালীন ফল গৃষ্ম কালীন ফল বারোমাসি ফল --> */}
                                        <div className="single-category">
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
                                        
                                        {/* <!--=======  End of single category  =======-->
                                    
                                        <!--=======  single category  =======--> */}

                                        <div className="single-category">
                                            <div className="category-image">
                                                <a href="shop-left-sidebar.html" title="গম">
                                                    <img src="/frontend-asset/assets_2/images/categories/wheat.png" className="img-fluid" alt="" />
                                                </a>
                                            </div>
                                            <div className="category-title">
                                                <h3>
                                                    <a href="shop-left-sidebar.html"> গম</a>
                                                </h3>
                                            </div>
                                        </div>						
                                        
                                        {/* <!--=======  End of single category  =======-->
                                    
                                        <!--=======  single category  =======--> */}
                                        
                                        <div className="single-category">
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
{/*                                         
                                        <!--=======  End of single category  =======-->
                                    
                                        <!--=======  single category  =======--> */}
                                        
                                        <div className="single-category">
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
{/*                                         
                                        <!--=======  End of single category  =======-->
                                    
                                        <!--=======  single category  =======-->
                                         */}
                                        
                                        <div className="single-category">
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
                                        
                                        {/* <!--=======  End of single category  =======-->
                                    
                                        <!--=======  single category  =======--> */}
                                        
                                        <div className="single-category">
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
                                        
                                        {/* <!--=======  End of single category  =======--> */}
                                        
                                    </div>
                                    
                                    {/* <!--=======  End of category container  =======--> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <!--=====  End of category slider  ======--> */}
                </section>
            </div>
        )
    }
}
