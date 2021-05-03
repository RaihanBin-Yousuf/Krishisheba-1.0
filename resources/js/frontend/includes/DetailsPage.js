import React, { Component } from 'react'

export default class DetailsPage extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="content">
                        <div className="container offer-show">
                            <div className="row" style={{PaddingTop:'15px'}}>
                                <div className="col-md-12">
                                    <a href="{{ route('paddy.index">
                                    <img className="icn-arrow--left" src="/frontend-asset/market/icons/grey_arrow_down-d595d8db881c98fbae6ad8cec7f0727191deefa0327a7adebda0e52d64e7fd85.png" alt="Grey arrow down" />
                                    Return to filter board
                                    </a>
                                </div>
                                <div className="col-md-3" style={{PaddingTop:"15px"}}>
                                    <h3 className="mt-0">ধান</h3>
                                    <h4 className="mt-0">আইডি: $managepost['id']</h4>
                                </div>
                                <div className="col-md-12">
                                    <div className="offer-show__my-list-actions">
                                        <a href="#">
                                        <img src="/frontend-asset/market/logos/list.png" alt="List" />
                                        <span>Add To List</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 hidden-md-down">
                                    <div className="col-md-3 offer-show__col">
                                        {/* <img src="{{asset('storage/posts/'.$managepost->product_image)}}"style={{width:"275px", height:"186px"}}/> */}
                                    </div>
                                    <div className="col-md-9 offer-show__col" style={{PaddingLeft: "40px",Float:"right"}}>
                                        <div className="row offer-form-table">
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-md-6"><strong>মোট ওজন:</strong></div>
                                                    <div className="col-md-6">$managepost['total_weight'] $managepost['weight_unit'] </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6"><strong>ইউনিট প্রতি মূল্য (৳):</strong></div>
                                                    <div className="col-md-6">৳ $managepost['price_per_unit']</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6"><strong> চূড়ান্ত বিতরণ তারিখ:</strong></div>
                                                    <div className="col-md-6">$managepost['final_delivery_date']</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6"><strong className="text-checkout--strong">অগ্রিম পরিশোধ (30%):</strong></div>
                                                    <div className="col-md-6"><span className="text-checkout">৳$managepost['advance_payment']</span></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="row">
                                                    <div className="col-md-6"><strong>ঠিকানা:</strong></div>
                                                    <div className="col-md-6">$managepost['divisions']</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6"></div>
                                                    <div className="col-md-6">
                                                        <span className="text-checkout">$managepost['district']</span>
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
                                                <div className="col-md-6">$managepost['product_name']</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>পণ্যের প্রকার:</strong></div>
                                                <div className="col-md-6">$managepost['category']</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>জাত:</strong></div>
                                                <div className="col-md-6">$managepost['sub_category']</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>উৎপাদনের ধরন:</strong></div>
                                                <div className="col-md-6">$managepost['production_type']</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>উৎপাদন সাল:</strong></div>
                                                <div className="col-md-6">$managepost['product_production_year']</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-md-6"><strong>প্যাকেজিং পদ্ধতি:</strong></div>
                                                <div className="col-md-6">$managepost['packaging_method']</div>
                                            </div>
                                            <br/>
                                            <div className="col-md-6 float-right">
                                                <input type="submit" name="commit" value="নমুনার জন্য অনুরোধ" className="btn btn-solid btn--full btn--100p" data-disable-with="Buy Product" />
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
                                        <div className="col-md-3">
                                            <h4 style={{Display: "inline-block"}}></h4>
                                            <div className="tool-tip">
                                                <i className="tool-tip__icon-info">i</i>
                                                <p className="tool-tip__hidden-bottom">
                                                    <span className="info">
                                                        <span class="info__title">তথ্য: </span>
                                                        <span class="info__text"> এই অপশনটির সাহায্যে আপনি প্রোডাক্টের মালিকের সাথে আলাপ-আলোচনা করতে পারবেন দাম এবং পরিমাণ সম্পর্কে </span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                                দাম
                                            <input type="number" name="new_price" id="new_price" class="form-control" required="required" min="0" step="0.01" placeholder=" প্রতি {{$managepost['weight_unit']}} {{$managepost['price_per_unit']}}৳ " />
                                        </div>
                                        <div class="col-md-3">
                                            ওজন
                                            <input type="number" name="new_weight" id="new_weight" class="form-control" required="required" min="0" step="0.1" placeholder="মোট ওজন: {{$managepost['total_weight']}} {{$managepost['weight_unit']}}" />
                                        </div>
                                        <div class="col-md-3">
                                            প্রস্তাব পাঠান
                                            <input type="submit" value="প্রস্তাব পাঠান" class="btn btn-solid btn--full btn--100p" data-disable-with="Send Counter Offer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-9"></div>
                                <div className="col-md-3 float-right"><br/>
                                    <input type="submit" name="commit" value="Buy Product" class="btn btn-solid btn--full btn--100p"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}
