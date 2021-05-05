import React, { Component } from 'react';
import TopCategoryServices from '../../services/TopCategoryServices';
import Slider from "react-slick";
export default class TopCategorySlider extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            products: []
        };
        this.getProductDetails = this.getProductDetails.bind(this);
    }

    componentDidMount() {
       this.getProductDetails();
    }

    async getProductDetails() {
        const res = await TopCategoryServices.list();
        this.setState ({
            ['products']: res,
        })
    }

    
    render() {
        let productList = '';
        productList = this.state.products.map(product=> (
            productList = <div className="single-category  slick-slide slick-cloned" onClick ={()=>this.props.productDetails(product)} key={product.id}>
                                <div className="category-image">
                                    <a title="ধান">
                                        <img src={"/storage/product/"+product.product_img} className="img-fluid" alt=""/>
                                    </a>
                                </div>
                                <div className="category-title">
                                    <h3>
                                        <p>{product.name}</p>
                                    </h3>
                                </div>
                            </div>
                        ));
        return (<>
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
                                            {/* <button className="slick-prev slick-arrow"><i className="fa fa-caret-left"></i></button> */}
                                        <div className="slick-list draggable">
                                            <div className="slick-track">
                                                    <Slider/>
                                                        {productList}
                                                    <Slider/>
                                            </div>
                                        </div>
                                            {/* <button className="slick-next slick-arrow"><i className="fa fa-caret-right"></i></button> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>)
    }
}