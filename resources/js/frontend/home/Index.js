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
import Cart from '../includes/Cart';
import Checkout from '../includes/Checkout';
import TopCategoryServices from '../../services/TopCategoryServices';
import UserServices from '../../services/UserServices';
import Login from '../includes/Login';
import Map from '../includes/Map';
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
            serviceFee: 0,
            subTotal: 0,
            authUser: [],
            loginForm: false,

        };
        this.showPage = this.showPage.bind(this);
        this.productDetails = this.productDetails.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.viewDetails = this.viewDetails.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.topCategorySlider = this.topCategorySlider.bind(this);
        this.updateQty = this.updateQty.bind(this);
        this.totalPrice = this.totalPrice.bind(this);
        this.getAuthUser = this.getAuthUser.bind(this);
        this.setAuthUser = this.setAuthUser.bind(this);
        this.showCheck = this.showCheck.bind(this);
        this.loginFormClose = this.loginFormClose.bind(this);
    }

    loginFormClose() {
        this.setState({
            loginForm: false,
        })
    }

    showCheck() {
        if(this.state.authUser.data == "not found") {
            this.setState({ ['loginForm']: true})
        } else {
            console.log('auth user data :>> ', this.state.authUser);
            if(this.state.authUser.access_to == 0 || this.state.authUser.access_to == 99) {
                $.notify({message : 'লেনদেনের জন্য অনুমতি প্রদান করা হইনি। অনুগ্রহ করে অপেক্ষা করুন'}, {type: 'danger'});
            } else {
                this.showPage('checkout');
            }
        }
    }

    showPage(page) {
        this.setState({ ['show_page']: page, ['prev_page']: this.state.show_page});
    }

    componentDidMount() {
        this.topCategorySlider();
        this.getAuthUser();
    }

    async getAuthUser() {
        const user = await UserServices.get();
        console.log('user :>> ', user);
        if(user) {
            this.setState({
                authUser: user,
            })
        } else {
        this.setState({
            authUser: user.data,
            })
        }
    }

    async setAuthUser() {
        const user = await UserServices.get();
        console.log('user :>> ', user);
            this.setState({
                authUser: user,
            },()=>{this.showPage('checkout')})
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
            product.total_unit = product.total_weight - product.quantity;
            if(product.weight_unit == 'কেজি') {
                product.each_service_fee = 5;
            } else if(product.weight_unit == 'মণ') {
                product.each_service_fee = 200;
            } else if(product.weight_unit == 'পিস') {
                product.each_service_fee = 1;
            } else if(product.weight_unit == 'টন') {
                product.each_service_fee = 1000;
            } 
            product.each_total_fee = product.quantity * product.each_service_fee;
            //  else if(product.weight_unit == 'মেট্রিক টন') {
            //     product.each_service_fee = 1;
            // } 
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
                let total_quantity_weight =  product.total_weight - product.quantity;
                if(total_quantity_weight<1) {
                    product.total_unit = 'Nan';
                    $.notify({message: "No more Quantity available."}, {type: 'danger'});
                } else {
                    product.total_unit = total_quantity_weight;
                }
                product.total_each_price = product.quantity * product.price_per_unit;
                product.each_total_fee = product.quantity * product.each_service_fee;
            }
            filterProducts.push(product);
        }) 
        this.setState({
            ['addCart'] : filterProducts,
        },()=>{this.totalPrice()});//
        }
    }

    totalPrice() {
        let grandSubTotalPrice = 0;
        let grandTotalServiceFee = 0;
        this.state.addCart.map(product => {
            if(product.total_unit != 'Nan') {
                grandSubTotalPrice = grandSubTotalPrice + product.total_each_price;
                grandTotalServiceFee = grandTotalServiceFee + product.each_total_fee;
            }
        });
        let grandTotalPrice = grandSubTotalPrice + grandTotalServiceFee;
        this.setState({ 
            ['totalPrice'] : grandTotalPrice, 
            ['serviceFee']: grandTotalServiceFee,
            ['subTotal']: grandSubTotalPrice,
        });
    }

    removeProduct(product) {
        const productArray = this.state.addCart;
        const newArray = productArray.filter((current)=> current.id !==product.id)
        console.log('productArray :>> ', newArray);
        this.setState({
            ['addCart'] : newArray,
        },()=>{this.totalPrice()});
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
                                {/* <Cta/> */}
                                <Contact/>
                            </div>
        } else if(this.state.show_page === 'productdetails') {
            showPageName = <DetailsPage addProduct={this.addProduct} data={this.state} showPage={this.showPage}/>
        } else if(this.state.show_page === 'findProducts') {
            showPageName = <FindProducts/>
        } else if(this.state.show_page === 'team') {
            showPageName = <Team/>
        } else if(this.state.show_page === 'faq') {
            showPageName = <Faq/>
        } else if(this.state.show_page === 'filter') {
            showPageName = <Filter addProduct={this.addProduct} data={this.state} viewDetails={this.viewDetails}/>
        } else if (this.state.show_page === 'cart') {
            showPageName = <Cart data={this.state} showPage={this.showPage} updateQty={this.updateQty} getAuthUser={this.getAuthUser} setAuthUser={this.setAuthUser} totalPrice={this.totalPrice} removeProduct={this.removeProduct}/>
        } else if (this.state.show_page === 'checkout') {
            showPageName = <Checkout data={this.state} showPage={this.showPage}/>
        } else if (this.state.show_page === 'map') {
            showPageName = <Map />
        }
        return (
            <>  
                {/* <ShoppingCart data={this.state} /> */}
                <TopBarAndHeader data={this.state} showPage={this.showPage} getAuthUser={this.getAuthUser} removeProduct={this.removeProduct} viewDetails={this.viewDetails} showCheck={this.showCheck}/>
                {this.state.authUser.data == "not found" && this.state.loginForm ? <Login loginFormClose={this.loginFormClose} setAuthUser={this.setAuthUser}/>: ''}
                {showPageName}
                {/* <Faq/> skipped */}
                {/* <Team/> skipped*/}
                {/* <Filter/> */}
                {this.state.show_page === 'productdetails' && this.state.show_page === 'map' ? '' : <Footer/>}
                
            </>
        )
    }
}
if (document.getElementById('react_fronend_index')) {
    ReactDOM.render(<Index />, document.getElementById('react_fronend_index'));
}
