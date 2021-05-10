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
import TopCategoryServices from '../../services/TopCategoryServices';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_page: null,
            prev_page: null,
            product: [],
            addCart: [],
            product_info: [],
            products: [],
            totalPrice: 0,

        };
        this.showPage = this.showPage.bind(this);
        this.productDetails = this.productDetails.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.viewDetails = this.viewDetails.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.topCategorySlider = this.topCategorySlider.bind(this);
        this.updateQty = this.updateQty.bind(this);
        this.totalPrice = this.totalPrice.bind(this);

    }

    showPage(page) {
        this.setState({ ['show_page']: page, ['prev_page']: this.state.show_page});
    }

    componentDidMount() {
        this.topCategorySlider();
    }

    async topCategorySlider() {
        const res = await TopCategoryServices.list();
        this.setState ({
            ['products']: res,
        })
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
            product.quantity = 1;
            product.total_each_price = product.price_per_unit;
            productArray.push(product);
            this.setState({
                ['addCart'] : productArray,
            },()=>{this.totalPrice()}); //
        }
        // this.setState({ ['addCart']: product});
    }

    
    updateQty(e, inputproduct) {
        const filterProducts = [];
        if(e.target.value <= 0) {
            $.notify({message: "Must have 1 Product."}, {type: 'danger'});
        } else {
        this.state.addCart.map(product => {
            if(product.id == inputproduct.id) {
                product.quantity = e.target.value;
                product.total_each_price = product.quantity * product.price_per_unit;
            }
            filterProducts.push(product);
        }) 
        this.setState({
            ['addCart'] : filterProducts,
        },()=>{this.totalPrice()});//
        }
    }

    totalPrice() {
        let grandTotalPrice = 0;
        this.state.addCart.map(product => {
            grandTotalPrice = grandTotalPrice + product.total_each_price;
        });
        console.log('grand :>> ', grandTotalPrice);
        this.setState({ ['totalPrice'] : grandTotalPrice});
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
            },()=>{this.totalPrice()});
        }
    }

    render() {
        let showPageName = '';
        if(this.state.show_page === null) {
            showPageName = <div>
                                <Hero/>
                                <TopCategorySlider productDetails={this.productDetails} data={this.state}/>
                                <TabSlider addProduct={this.addProduct}  data={this.state} viewDetails={this.viewDetails}/>
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
            showPageName = <Filter addProduct={this.addProduct} data={this.state} viewDetails={this.viewDetails}/>
        } else if (this.state.show_page === 'cart') {
            showPageName = <Cart data={this.state} updateQty={this.updateQty} totalPrice={this.totalPrice} removeProduct={this.removeProduct}/>
        } else if (this.state.show_page === 'checkout') {
            showPageName = <Checkout data={this.state} />
        }
        return (
            <>  
                {/* <ShoppingCart data={this.state} /> */}
                <TopBarAndHeader data={this.state} showPage={this.showPage} removeProduct={this.removeProduct} viewDetails={this.viewDetails}/>

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
