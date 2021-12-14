import React, { Component } from 'react'
const { toBengaliNumber} = require('bengali-number');
export default class DetailsPage extends Component {
    render() {
        // console.log('this.props.data :>> ', this.props.data);
        let previousPage = this.props.data.prev_page;
        let pdata = this.props.data.product_info
        return (
            <div>
                    <div className="content">
                        <div className="container offer-show">
                            <div className="row pt-2">
                                <div className="col-md-12">
                                    <a onClick ={()=>this.props.showPage(previousPage)}>
                                    <img className="icn-arrow--left" src="/frontend-asset/market/icons/grey_arrow_down-d595d8db881c98fbae6ad8cec7f0727191deefa0327a7adebda0e52d64e7fd85.png" alt="Grey arrow down" />
                                    পূর্বের পেজে ফিরে যান
                                    </a>
                                </div>
                                <div className="col-md-3 pt-2">
                                    <h3 className="mt-0">{pdata.product_name}</h3>
                                    <h4 className="mt-0">আইডি: {toBengaliNumber(pdata.id)}</h4>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-3 offer-show__col">
                                        <img src={'/storage/posts/'+pdata.product_image} width="275px" height="186px"/>
                                    </div>
                                    <div className="col-md-9 offer-show__col details-table">
                                        <div className="row offer-form-table">
                                            <div className="col-md-6">
                                            <h4 className="h4post">পণ্য সম্পর্কে</h4>
                                                {/* <div className="row">
                                                    <div className="col-md-8"><strong>মোট ওজন:</strong></div>
                                                    <div className="col-md-4">{toBengaliNumber(pdata.total_weight)} {pdata.weight_unit} </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-8"><strong>ইউনিট প্রতি মূল্য (৳):</strong></div>
                                                    <div className="col-md-4">৳ {toBengaliNumber(pdata.price_per_unit)} {pdata.weight_unit}</div>
                                                </div> */}
                                                <div className="row">
                                                    <div className="col-md-8"><strong>পণ্যটি সর্বমোট বিক্রয় হয়েছে:</strong></div>
                                                    <div className="col-md-4">{toBengaliNumber(pdata.count_buy_product)} বার</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-8"><strong>সর্বমোট বিক্রয়ের পরিমাণ:</strong></div>
                                                    <div className="col-md-4">{toBengaliNumber(pdata.weight_count)} {pdata.weight_unit}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-8"><strong> অফার শেষ হওয়ার তারিখ:</strong></div>
                                                    <div className="col-md-4">{toBengaliNumber(pdata.offer_end_date)}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-8"><strong className="text-checkout--strong">ছাড় মূল্য (শতকরা হার) </strong></div>
                                                    <div className="col-md-4"><span className="text-checkout">{toBengaliNumber(pdata.discount_price)}% </span></div>
                                                </div>
                                            </div>
                                           
                                            <div className="col-md-6">
                                            <h4 className="h4post">ফসল উৎপাদনের স্থান</h4>
                                                <div className="row">
                                                    <div className="col-md-6"><strong>বিভাগ:</strong></div>
                                                    <div className="col-md-6">{pdata.divisions}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6"><strong>জেলা:</strong></div>
                                                    <div className="col-md-6">{pdata.district}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6"><strong>থানা:</strong></div>
                                                    <div className="col-md-6">{pdata.thana}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 offer-show__col">
                                    <div className="row offer-form-table">
                                        <div className="col-md-12">
                                            <h4>পণ্যের বিবরণ</h4>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>মোট ওজন:</strong></div>
                                                <div className="col-md-6">{toBengaliNumber(pdata.total_weight)} {pdata.weight_unit}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>ইউনিট প্রতি মূল্য (৳):</strong></div>
                                                <div className="col-md-6">{pdata.weight_unit} {toBengaliNumber(pdata.price_per_unit)} ৳</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>পণ্য:</strong></div>
                                                <div className="col-md-6">{pdata.product_name}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>পণ্যের প্রকার:</strong></div>
                                                <div className="col-md-6">{pdata.category}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>জাত:</strong></div>
                                                <div className="col-md-6">{pdata.sub_category}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>উৎপাদনের ধরন:</strong></div>
                                                <div className="col-md-6">{pdata.production_type}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>উৎপাদন সাল:</strong></div>
                                                <div className="col-md-6">{toBengaliNumber(pdata.product_production_year)}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>প্যাকেজিং পদ্ধতি:</strong></div>
                                                <div className="col-md-6">{toBengaliNumber(pdata.packaging_method)}</div>
                                            </div>
                                            <br/>
                                            <div className="col-md-6 float-right">
                                                {/* <input type="submit" name="commit" value="নমুনার জন্য অনুরোধ" className="btn btn-solid btn--full btn--100p"/> */}
                                                <button onClick={()=>this.props.addProduct(pdata)} className="btn btn-solid btn--full btn--100p">ব্যাগে যুক্ত করুন</button>
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
