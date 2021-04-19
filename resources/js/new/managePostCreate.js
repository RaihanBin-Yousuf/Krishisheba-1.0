import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CategoryServices from '../services/CategoryService';
import PostService from '../services/PostService';
import ProductServices from '../services/ProductServices';
import SubcateoryService from '../services/SubcateoryService';
class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            subCategories: [],
            post: {
                total_weight: 0,
                price_per_unit: '',
                product_production_year: '',
                initial_delivery_date: '',
                final_delivery_date: '',
                offer_end_date: '',
                own_vehicle:0,
                product_image:null,
                },
            };
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleInputChange = this.handleInputChange.bind(this);
        }

        componentDidMount(){
            // this.getCategories();
            // this.getSubCategories();
            this.getProduct();
            // this.getPost();
           
        }

        async getCategories() {
            const res = await CategoryServices.dropdown({"type":"item"});
            this.setState({
                ['categories']: res,
            });
        }
        async getSubCategories() {
            const res = await SubcateoryService.dropdown({"type":"item"});
            this.setState({
                ['subCategories']: res,
            });
        }
        async getProduct() {
            const res = await ProductServices.dropdown({"type":"item"});
            this.setState({
                ['products']: res,
            });
        }
        async getPost() {
            const res = await PostService.dropdown({"type":"item"});
            this.setState({
                ['post']: res,
            });
        }

    
        handleInputChange(event) {
            const target = event.target;
            let value = target.type === 'checkbox' ? ( target.checked ? target.value : 0 ) : target.value;
            const name = target.name;
            if (name == 'picture') {
                value = target.files[0];
            }
               this.setState({
                  item :{
                    ...this.state.item,
                  [name]: value
                  }
            });
        }
    
        async handleSubmit(event) {
            event.preventDefault();
            console.log(this.state.item);
            const citem = this.state.item;
            let formdata = new FormData();
            Object.keys(citem).map(key => {
                formdata.append(key, citem[key]);
            });
            // const res = await itemServices.save(formdata);
            // if (res.success) {
            //     this.props.showForm(null);
            // }
        }
    

    render() {
        console.log('products');
        console.log(this.state.products);
        return (<>
            <div className="custom-post-form">
                <form action="">
                    <h4 className="h4post">পণ্য সম্পর্কে</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                            <h5 htmlFor="commidities">পণ্য</h5>
                            <select className="form-control select2bs4" defaultValue={'DEFAULT'} required="required">
                                <option disabled value="DEFAULT">নির্বাচন করুন</option>                        
                                <option value="ধান">ধান</option>
                                <option value="চাল">চাল</option>
                                <option value="গম">গম</option>
                                <option value="ভুট্টা">ভুট্টা</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <h5 htmlFor="">মোট ওজন* </h5>
                                <input className="form-control values-input" step="any" required="required" id="total-weight" type="number" name="total_weight" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group" >
                                <h5 htmlFor="weight_unit">ওজন ইউনিট*</h5>
                                <select className="form-control" defaultValue={'DEFAULT'}>
                                    <option disabled value="DEFAULT">নির্বাচন করুন</option>       
                                    <option value="মেট্রিক টন">মেট্রিক টন</option>
                                    <option value="টন">টন</option>
                                    <option value="কেজি">কেজি</option>
                                    <option value="কেজি">কেজি</option>
                                    <option value="পিস">পিস</option>
                                </select>
                            </div>
                        </div>
        
                        <div className="col-md-3">
                            <div className="form-group">
                                <h5 htmlFor="">ইউনিট প্রতি মূল্য (৳)*</h5>
                                <input className="form-control values-input" value="0" required="required"  type="number" name="price_per_unit" />
                            </div>
                        </div>
        
                        <div className="col-md-3">
                            <div className="form-group" >
                                <h5 htmlFor="advance_paid">অগ্রিম পরিশোধ (%)*</h5>
                                <select className="form-control" defaultValue={'0'}>
                                    <option value="0">0 (%)</option>
                                    <option value="5">5 (%)</option>
                                    <option value="10">10 (%)</option>
                                    <option value="15">15 (%)</option>
                                    <option value="20">20 (%)</option>
                                    <option value="25">25 (%)</option>
                                    <option value="30">30 (%)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <h4 className="h4post">পণ্যের বিবরণ</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <h5 htmlFor="category"> পণ্যের প্রকার*</h5>
                                <select className="form-control" defaultValue={'DEFAULT'} required="required">
                                    <option disabled value="DEFAULT">নির্বাচন করুন</option>  
                                    <option value="আউশ ধান">আউশ ধান</option>
                                    <option value="আমন ধান">আমন ধান</option>
                                    <option value="বোরো ধান">বোরো ধান</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <h5 htmlFor="sub_category">পণ্যের জাত সমূহ*</h5>
                                <select className="form-control" defaultValue={'DEFAULT'}>
                                    <option disabled value="DEFAULT">নির্বাচন করুন</option>  
                                    <option value="বিআর১ (চান্দিনা)">বিআর১ (চান্দিনা)</option>
                                    <option value="বিআর২ (মালা">বিআর২ (মালা)</option>
                                    <option value="বিআর৩ (বিপ্লব)">বিআর৩ (বিপ্লব)</option>
                                    <option value="বিআর৪ (ব্রিশাইল)">বিআর৪ (ব্রিশাইল)</option>
                                    <option value="বিআর৫ (দুলাভোগ)">বিআর৫ (দুলাভোগ)</option>
                                    <option value="বিআর৬">বিআর৬</option>
                                    <option value="বিআর৭(ব্রি বালাম)">বিআর৭(ব্রি বালাম)</option>
                                    <option value="বিআর৮ (আশা)">বিআর৮ (আশা)</option>
                                    <option value="বিআর৯ (সুফলা)">বিআর৯ (সুফলা)</option>
                                    <option value="বিআর১৯ (মঙ্গল)">বিআর১৯ (মঙ্গল)</option>
                                    <option value="বিআর২৩ (দিশারী)">বিআর২৩ (দিশারী)</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <h5>উৎপাদনের ধরন*</h5>
                                <select className="form-control" defaultValue={'DEFAULT'}>
                                    <option disabled value="DEFAULT">নির্বাচন করুন</option>
                                    <option value="প্রচলিত উৎপাদন">প্রচলিত উৎপাদন </option>
                                    <option value="জৈব উৎপাদন">জৈব উৎপাদন</option>
                                    <option value="রাসায়নিক উৎপাদন">রাসায়নিক উৎপাদন</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <h5 htmlFor=""> ফসল উৎপাদন সাল</h5>
                                <input className="form-control" value="" type="date" name="product_production_year"required="required"/>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <h5 htmlFor="">প্যাকেজিং পদ্ধতি*</h5>
                                <select className="form-control" defaultValue={'DEFAULT'}>
                                    <option disabled value="DEFAULT">নির্বাচন করুন</option>                          
                                    <option value="40 কেজি ব্যাগ">40 কেজি ব্যাগ</option>
                                    <option value="50 কেজি ব্যাগ">50 কেজি ব্যাগ</option>
                                    <option value="1 মেট্রিক টন">1 মেট্রিক টন</option>
                                    <option value="1 টন">1 টন</option>
                                    <option disabled>অন্য প্যাকেজিং পদ্ধতি(মন্তব্যে উল্লেখ করুন)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <h4 className="h4post">অফার সম্পর্কে*</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <div className="form-group"> 
                                    <h5 htmlFor="" className="control-h7">প্রাথমিক বিতরণ তারিখ*</h5> 
                                    <input type="date" className="form-control" value="" required name="initial_delivery_date"/> 
                                </div> 
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <div className="form-group"> 
                                    <h5 htmlFor="finaldeliverydate" className="control-h7"> চূড়ান্ত বিতরণ তারিখ*</h5> 
                                    <input type="date" className="form-control" value="" required name="final_delivery_date"/> 
                                </div> 
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="form-group">
                                <div className="form-group"> 
                                    <h5 htmlFor="" className="control-h7"> অফার শেষ হওয়ার তারিখ*</h5> 
                                    <input type="date" className="form-control" id="date" value="" name="offer_end_date"required="required"/> 
                                </div> 
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <h4 className="h4post">নিজস্ব যানবাহন আছে?*</h4>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input id="own_vehicle-yes" className="own_vehicle" type="radio" name="own_vehicle" value="1" /><span className="translation_missing" >  হ্যাঁ</span>
                                <input id="own_vehicle-no" className="own_vehicle" type="radio" name="own_vehicle" value="0" checked/><span className="translation_missing" >  না</span>
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <h4 className="h4post">আরো কিছু তথ্য দিন</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <h5 className="control-h7">বিভাগ*</h5> 
                                <select name="divisions" id="divisions" required="required" className="form-control input-lg" defaultValue={'DEFAULT'}>
                                    <option disabled value="DEFAULT">নির্বাচন করুন</option>
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
                        </div>

                        
                        <div className="col-md-4"> 
                            <div className="form-group">
                                <h5 className="control-h7">জেলা*</h5>
                                <select className="form-control input-lg" name="district" id="distr" required="required" defaultValue={'DEFAULT'}>
                                    <option disabled value="DEFAULT">নির্বাচন করুন</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="form-group"> 
                                <h5 htmlFor="field-5" className="control-h7">থানা*</h5> 
                                <select className="form-control input-lg" defaultValue={'DEFAULT'} name="thana" id="polic_sta" required="required">
                                    <option disabled value="DEFAULT">নির্বাচন করুন</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* done  */}
                    <div className="row">
                        <div className="col-md-4">
                            <h5 htmlFor="address" className="control-h7">গ্রাম/মহল্লা*</h5> 
                            <input type="text" className="form-control" id="address" placeholder="গ্রাম/মহল্লা" value=""  name="villege" required="required"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {/* <div className="form-group" style="margin-top: 10px;"> */}
                            <div className="form-group addtionalcmnt">
                                <h4 className="h4post" htmlFor="additional_comments">সংযোজিত মন্তব্য</h4>
                                <textarea className="form-control" name="comments"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="h4post" htmlFor="files"> চিত্র আপলোড করুন:</h4>
                            <input type="file" id="files" name="product_image" value="" required/>                     
                        </div>
                    </div>
                    {/* done  */}
                    <div className="row">
                        {/* <div className="col-md-9" style="margin-top:20px;"> */}
                        <div className="col-md-9 agricultre-demand">
                            <div className="form-group">
                            <input name="" type="hidden" value="0" /><input className="inline-block" required="required" type="checkbox" value="1" />
                            পণ্য কেনা বেচার জন্য <a className="link-green inline-block" target="_blank" href="#">কৃষিসেবার শর্তাবলীর সাথে</a> একমত পোষণ করছি
                            </div>
                        </div>
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-info btn-block">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </>)
    }
}
export default Create;

if (document.getElementById('react_manage_posts')) {
    ReactDOM.render(<Create />, document.getElementById('react_manage_posts'));
}
