import React, { Component } from 'react'

export default class DetailsPage extends Component {
    render() {
        // console.log('this.props.data :>> ', this.props.data);
        let previousPage = this.props.data.prev_page;
        let pdata = this.props.data.product_info
        return (
            <div>
                <section>
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
                                    <h3 className="mt-0">ধান</h3>
                                    <h4 className="mt-0">আইডি: {pdata.id}</h4>
                                </div>
                                <div className="col-md-12">
                                    <div className="offer-show__my-list-actions">
                                        <a href="#">
                                        <img src="/frontend-asset/market/logos/list.png" alt="List" />
                                        <span> পছন্দের তালিকায় যোগ করুন</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 hidden-md-down">
                                    <div className="col-md-3 offer-show__col">
                                        <img src={'/storage/posts/'+pdata.product_image} width="275px" height="186px"/>
                                    </div>
                                    <div className="col-md-9 offer-show__col details-table">
                                        <div className="row offer-form-table">
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-md-6"><strong>মোট ওজন:</strong></div>
                                                    <div className="col-md-6">{pdata.total_weight} {pdata.weight_unit} </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6"><strong>ইউনিট প্রতি মূল্য (৳):</strong></div>
                                                    <div className="col-md-6">৳ {pdata.price_per_unit}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6"><strong> চূড়ান্ত বিতরণ তারিখ:</strong></div>
                                                    <div className="col-md-6">{pdata.final_delivery_date}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6"><strong className="text-checkout--strong">অগ্রিম পরিশোধ </strong></div>
                                                    <div className="col-md-6"><span className="text-checkout">% {pdata.advance_payment}</span></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-md-6"><strong>ঠিকানা:</strong></div>
                                                    <div className="col-md-6">{pdata.divisions}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6"></div>
                                                    <div className="col-md-6">
                                                        <span className="text-checkout">{pdata.district}</span>
                                                    </div>
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
                                                <div className="col-md-6">{pdata.product_production_year}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>প্যাকেজিং পদ্ধতি:</strong></div>
                                                <div className="col-md-6">{pdata.packaging_method}</div>
                                            </div>
                                            <br/>
                                            <div className="col-md-6 float-right">
                                                <input type="submit" name="commit" value="নমুনার জন্য অনুরোধ" className="btn btn-solid btn--full btn--100p"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 offer-show__col">
                            <div className="row offer-form-table">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 tool-tip-info">
                                            <h4>পাল্টা প্রস্তাব পাঠান</h4>
                                            <div className="tool-tip">
                                                <i className="tool-tip__icon-info">i</i>
                                                <p className="tool-tip__hidden-bottom">
                                                    <span className="info">
                                                        <span className="info__title">তথ্য: </span>
                                                        <span className="info__text"> এই অপশনটির সাহায্যে আপনি প্রোডাক্টের মালিকের সাথে আলাপ-আলোচনা করতে পারবেন দাম এবং পরিমাণ সম্পর্কে </span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                                দাম
                                            <input type="number" name="new_price" id="new_price" className="form-control" required="required" min="0" step="0.01" placeholder={"প্রতি "+pdata.weight_unit+" "+pdata.price_per_unit+"৳" } />
                                        </div>
                                        <div className="col-md-3">
                                            ওজন
                                            <input type="number" name="new_weight" id="new_weight" className="form-control" required="required" min="0" step="0.1" placeholder={"মোট ওজন: "+ +pdata.total_weight+" "+pdata.weight_unit} />
                                        </div>
                                        <div className="col-md-3">
                                            প্রস্তাব পাঠান
                                            <input type="submit" value="প্রস্তাব পাঠান" className="btn btn-solid btn--full btn--100p" data-disable-with="Send Counter Offer" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9"></div>
                                            <div className="col-md-3 float-right"><br/>
                                                {/* <input type="submit" name="commit" value="Buy Product" className="btn btn-solid btn--full btn--100p"  />  */}
                                                <button onClick={()=>this.props.addProduct(pdata)} className="btn btn-solid btn--full btn--100p">Buy Product</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>                 
                </section>
            </div>
        )
    }
}
