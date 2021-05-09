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
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
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
        let productList = '';
        productList = this.state.products.map(product=> (
        productList = <div className="single-category" onClick ={()=>this.props.productDetails(product)} key={product.id}>
                            <div className="category-image">
                                <a title={product.name}>
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
                    <div className="slider category-slider mb-35 ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <h3>top categories</h3>
                                    </div>  
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12 ">
                                    <div className="category-slider-container bg-white shadow">

                                        <Slider {...settings}>
                                            {productList}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                                   

                           
                        </div>
                    </div>
                </section>
        </>)
    }
}