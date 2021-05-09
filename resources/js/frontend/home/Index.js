import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Hero from '../includes/Hero';
import TopCategorySlider from '../includes/TopCategorySlider';
import TabSlider from '../includes/TabSlider';
import AboutUs from '../includes/AboutUs';
import HowItsWorks from '../includes/HowItsWorks';
import Service from '../includes/Service';
import Cta from '../includes/Cta';
import Contact from '../includes/Contact';
import Footer from '../includes/Footer';
import Team from '../includes/Team';
import TopBarAndHeader from '../includes/TopBarAndHeader';
import Faq from '../includes/Faq';
import FindProducts from '../includes/FindProducts';
import Filter from '../includes/Filter';
import DetailsPage from '../includes/DetailsPage';
import Test from '../includes/Test';
import Cart from '../includes/Cart';
import Checkout from '../includes/Checkout';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_page: null,
            product: [],
            addCart: [],
            product_info: []
        };
        this.showPage = this.showPage.bind(this);
        this.productDetails = this.productDetails.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.viewDetails = this.viewDetails.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
    }

    showPage(page) {
        this.setState({ ['show_page']: page });
    }

    componentDidMount() {

    }

    productDetails(data) {
        this.setState({ ['product']: data, });
        this.showPage('filter');
    }

    viewDetails(data) {
        this.setState({ ['product_info']: data });
        this.showPage('productdetails');
    }

    addProduct(product) {
        const productArray = this.state.addCart;
        const checkItems = _.filter(this.state.addCart, function(cart) { //checking same product can't insert twice
            return cart.id == product.id;
        });
        if(checkItems.length>0) { 
            $.notify({message: 'Already Added'}, {type: 'danger'});
        } else {
            productArray.push(product);
            this.setState({
                ['addCart'] : productArray,
            }); //,()=>{this.productPrice()}
        }
        // this.setState({ ['addCart']: product});
    }

    removeProduct(product) {
        const productArray = this.state.addCart;
        const checkItems = _.filter(this.state.addCart, function(cart) { //checking same product can't insert twice
            return cart.id == product.id;
        });
        if(checkItems.length>0) { 
            productArray.pop(product);
            this.setState({
                ['addCart'] : productArray,
            }); //,()=>{this.productPrice()}
        }
    }

    render() {
        let showPageName = '';
        if(this.state.show_page === null) {
            showPageName = <div>
                                <Hero/>
                                <TopCategorySlider productDetails={this.productDetails}/>
                                <TabSlider addProduct={this.addProduct} data={this.state} viewDetails={this.viewDetails}/>
                                <AboutUs/>
                                <HowItsWorks/>
                                <Service/>
                                <Cta/>
                                <Contact/>
                            </div>
        } else if(this.state.show_page === 'productdetails') {
            showPageName = <DetailsPage data={this.state} showPage={this.showPage}/>
        } else if(this.state.show_page === 'findProducts') {
            showPageName = <FindProducts/>
        } else if(this.state.show_page === 'team') {
            showPageName = <Team/>
        } else if(this.state.show_page === 'faq') {
            showPageName = <Faq/>
        } else if(this.state.show_page === 'filter') {
            showPageName = <Filter data = {this.state} />
        } else if (this.state.show_page === 'cart') {
            showPageName = <Cart data={this.state} />
        } else if (this.state.show_page === 'checkout') {
            showPageName = <Checkout data={this.state} />
        }
        return (
            <>  
                {/* <ShoppingCart data={this.state} /> */}
                <TopBarAndHeader data={this.state} showPage={this.showPage} removeProduct={this.removeProduct}/>

                {showPageName}
                {/* <Faq/> skipped */}
                {/* <Team/> skipped*/}
                {/* <Filter/> */}
                <Footer/>
                
            </>
        )
    }
}
if (document.getElementById('react_fronend_index')) {
    ReactDOM.render(<Index />, document.getElementById('react_fronend_index'));
}
