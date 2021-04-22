import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productslist: [],
            categorieslist: [],
            subCategorieslist: [],
            divisionList : [{name : 'Barishal', value : 'বরিশাল'},{name : 'Chattogram', value : 'চট্টগ্রাম'},{name : 'Dhaka', value : 'ঢাকা'},{name : 'Khulna', value : 'খুলনা'},{name : 'Mymensingh', value : 'ময়মনসিংহ'},{name : 'Rajshahi', value : 'রাজশাহী'},{name : 'Rangpur', value : 'রংপুর'},{name : 'Sylhet', value : 'সিলেট'}],
            post : {
                product_id : '',
                total_weight : 0,
                weight_unit : 0,
                price_per_unit : 0,
                advance_payment : 0,
                category_id : 0,
                sub_category_id : 0,
                production_type : '',
                product_production_year : '',
                packaging_method : '',
                initial_delivery_date : '',
                final_delivery_date : '',
                offer_end_date : '',
                own_vehicle : '',
                divisions : '',
                district : '',
                thana : '',
                villege : '',
                comments : '',
                product_image : '',
            }
            
            };
            // post: {

            //     total_weight: 0,
            //     price_per_unit: '',
            //     product_production_year: '',
            //     initial_delivery_date: '',
            //     final_delivery_date: '',
            //     offer_end_date: '',
            //     own_vehicle:0,
            //     product_image:null,

            //     },
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.categorySelect = this.categorySelect.bind(this);
            this.getCategories = this.getCategories.bind(this);
            this.getSubCategories = this.getSubCategories.bind(this);
            this.subcategorySelect = this.subcategorySelect.bind(this);
            this.divisionsList = this.divisionsList.bind(this);
            this.thanaList = this.thanaList.bind(this);
            this.getPost = this.getPost.bind(this);
        }

        componentDidMount() {
            this.getProduct();
        }
        
    render() {
        return (<>
                {/* <h1>Helllo world</h1> */}
            </>)
    }
}
export default Product;


if (document.getElementById('react_test')) {
    ReactDOM.render(<Product />, document.getElementById('react_test'));
}
