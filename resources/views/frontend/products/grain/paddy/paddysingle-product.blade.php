@extends('frontend.home.master')
@section('home')
 <!-- ======= Top Bar and header ======= -->

 @include('frontend.includes.topbar-and-header')

 <!-- =======End Top Bar and header ======= -->

<section>
 <div class="content">  
    <div class="container offer-show">
      <!-- Return URL and Title -->
      <div class="row" style="padding-top:15px">
        <div class="col-md-12">
          <a href="{{route('filter-paddy')}}">
            <img class="icn-arrow--left" src="{{ asset('frontend-asset/market/icons/grey_arrow_down-d595d8db881c98fbae6ad8cec7f0727191deefa0327a7adebda0e52d64e7fd85.png') }}" alt="Grey arrow down" />
            Return to filter board
          </a></div>
          <div class="col-md-3" style="padding-top:15px">
            <h3 class="mt-0">ধান</h3>
            <h4 class="mt-0">ID: 10</h4>
          </div>

          <div class="col-md-12">
            <div class="offer-show__my-list-actions">
              <a href="#">
                <img src="{{ asset('frontend-asset/market/logos/list.png') }}" alt="List" />
                <span>Add To List</span>
              </a>
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-md-12 hidden-md-down" style="padding: 0;">
            <div class="col-md-3 offer-show__col" style="background-image: url('frontend-asset/market/logos/rice.png');background-size: cover; position: absolute; top: 0; bottom: 0; float: left; padding-left:0"></div>
            <div class="col-md-9 offer-show__col" style="padding-left: 40px;float:right;">
              <div class="row offer-form-table">
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-6"><strong> চূড়ান্ত বিতরণ তারিখ:</strong></div>
                    <div class="col-md-6">18/03/2021</div>
                  </div>
                  <div class="row">
                    <div class="col-md-6"><strong>মোট ওজন:</strong></div>
                    <div class="col-md-6">100.0 Metric Tons </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6"><strong>ইউনিট প্রতি মূল্য (৳):</strong></div>
                    <div class="col-md-6">৳370,00</div>
                  </div>
                  <div class="row">
                    <div class="col-md-6"><strong class="text-checkout--strong">অফার শেষ হওয়ার তারিখ:</strong></div>
                    <div class="col-md-6"><span class="text-checkout">27/03/2021</span></div>
                  </div>
                  <div class="row">
                    <div class="col-md-6"><strong class="text-checkout--strong">অগ্রিম পরিশোধ (30%):</strong></div>
                    <div class="col-md-6"><span class="text-checkout">৳11.100,00</span></div>
                  </div>
                </div>
                <div class="col-md-6">                    
                  <div class="row">
                    <div class="col-md-6"><strong>ঠিকানা:</strong></div>
                    <div class="col-md-6">বান্দরবান</div>
                  </div>

                  <div class="row">
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                      <span class="text-checkout">চট্টগ্রাম</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 offer-show__col">
            <div class="row offer-form-table">
              <div class="col-md-12">
                <h4>পণ্যের বিবরণ</h4>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6"><strong>পণ্যের প্রকার:</strong></div>
                  <div class="col-md-6">আউশ ধান </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6"><strong>জাত:</strong></div>
                  <div class="col-md-6">বিআর১ (চান্দিনা)</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6"><strong>পণ্যের ধরণ:</strong></div>
                  <div class="col-md-6">ধান</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6"><strong>উৎপাদনের ধরন:</strong></div>
                  <div class="col-md-6">রাসায়নিক উৎপাদন</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6"><strong>উৎপাদন সাল:</strong></div>
                  <div class="col-md-6">2021</div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6"><strong>প্যাকেজিং পদ্ধতি:</strong></div>
                  <div class="col-md-6">50 কেজি ব্যাগ</div>
                </div>
              </br>
              <div class="col-md-6 float-right" >
                <input type="submit" name="commit" value="নমুনার জন্য অনুরোধ" class="btn btn-solid btn--full btn--100p" data-disable-with="Buy Product" />
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>

        <div class="col-md-12 offer-show__col">
          <div class="row offer-form-table">
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <h4 style="display: inline-block;">পাল্টা প্রস্তাব পাঠান</h4>
                  <div class="tool-tip">
                    <i class="tool-tip__icon-info">i</i>
                    <p class="tool-tip__hidden-bottom">
                      <span class="info">
                        <span class="info__title">তথ্য: </span>
                        <span class="info__text"> এই অপশনটির সাহায্যে আপনি প্রোডাক্টের মালিকের সাথে আলাপ-আলোচনা করতে পারবেন দাম এবং পরিমাণ সম্পর্কে </span>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  Price per Metric Ton:
                  <input type="number" name="new_price" id="offer[new_price]" class="form-control" required="required" min="0" step="0.01" placeholder="Current: 370.0৳ per MT" />
                </div>
                <div class="col-md-3">
                  Lot Weight (MT):
                  <input type="number" name="new_weight" id="offer[new_weight]" class="form-control" required="required" min="0" max="100.0" step="0.1" placeholder="Current: 100.0 MT" />
                </div>
                <div class="col-md-3 mt-1">
                  প্রস্তাব পাঠান
                  <input type="submit" value="Send Counter Offer" class="btn btn-solid btn--full" data-disable-with="Send Counter Offer" />
                </div>
              </div>
            </br>
            <div class="row">
              <div class="col-md-12">
                <h4>আপনি কি পরিবহন নিতে চান?</h4>
                <input id="quotation-yes" class="quotation-btn" type="radio" name="service-quotation" value="yes" ><span class="translation_missing" title="translation missing: en.bids.show_logistic.yes">হ্যাঁ</span>
                <input id="quotation-no" class="quotation-btn" type="radio" name="service-quotation" value="no" checked><span class="translation_missing" title="translation missing: en.bids.show_logistic.no">না</span>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <h4>গন্তব্য:</h4>
              </div>
              <div class="col-md-4">
                <label for="field-5" class="control-label">বিভাগ*</label> 
                <select name="divisions" id="divisions" class="form-control input-lg" onchange="divisionsList();" >
                 <option disabled selected>নির্বাচন করুন</option>
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

             <div class="col-md-4">
              <label for="field-5" class="control-label">জেলা*</label> 
              <select class="form-control input-lg" name="" id="distr" onchange="thanaList();">
                <option disabled selected>নির্বাচন করুন</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="field-5" class="control-label">থানা</label> 
              <select class="form-control input-lg" name="Police Station" id="polic_sta">
                <option disabled selected>নির্বাচন করুন</option>
              </select>
            </div>

            <div class="col-md-4">
            </br>
            <label for="Address">গ্রাম/মহল্লা*</label>
            <input class="form-control" required="required" type="text" placeholder="গ্রাম/মহল্লা" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group" style="margin-top: 10px;">
              <label for="logistic[offer_response_comments]">মন্তব্য</label>
              <textarea type="text" name="logistic[offer_response_comments]" class="form-control"></textarea>
            </div>
          </div>
        </div>
        <div >
          <input name="offer[terms_and_conditions]" type="hidden" value="0" /><input class="inline-block" required="required" type="checkbox" value="1" name="offer[terms_and_conditions]" id="offer_terms_and_conditions" />
          পণ্য কেনা বেচার জন্য <a class="link-green inline-block" target="_blank" href="#">কৃষিসেবার শর্তাবলীর সাথে</a> একমত পোষণ করছি
        </div>
        <div class="col-md-3 float-right" >
          <input type="submit" name="commit" value="Buy Product" class="btn btn-solid btn--full btn--100p" data-disable-with="Buy Product" />
        </div>
      </div>
    </div>
  </div>

   
    <!--=============================================
	=            Related Product slider         =
	=============================================-->
	
	<div class="slider related-product-slider mb-35">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!--=======  multisale  slider section title  =======-->
                    
                    <div class="section-title">
                        <h3>Related Product</h3>
                    </div>
                    
                    <!--=======  End of multisale slider section title  =======-->
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <!--=======  related product slider wrapper  =======-->
                    
                    <div class="related-product-slider-wrapper">
                        <!--=======  single related slider product  =======-->
                        
                        <div class="gf-product related-slider-product">
                            <div class="image">
                                <a href="single-product.html">
                                    <span class="onsale">Sale!</span>
                                    <img src="frontend-asset/assets_2/images/products/product01.jpg" class="img-fluid" alt="">
                                </a>
                                <div class="product-hover-icons">
                                    <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                    <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                    <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                    <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-categories">
                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                </div>
                                <h3 class="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                <div class="price-box">
                                    <span class="main-price">$89.00</span>
                                    <span class="discounted-price">$80.00</span>
                                </div>
                            </div>
                            
                        </div>
                        
                        <!--=======  End of single related slider product  =======-->
                        <!--=======  single related slider product  =======-->
                        
                        <div class="gf-product related-slider-product">
                            <div class="image">
                                <a href="single-product.html">
                                    <span class="onsale">Sale!</span>
                                    <img src="frontend-asset/assets_2/images/products/product02.jpg" class="img-fluid" alt="">
                                </a>
                                <div class="product-hover-icons">
                                    <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                    <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                    <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                    <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-categories">
                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                </div>
                                <h3 class="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                <div class="price-box">
                                    <span class="main-price">$89.00</span>
                                    <span class="discounted-price">$80.00</span>
                                </div>
                            </div>
                            
                        </div>
                        
                        <!--=======  End of single related slider product  =======-->
                        <!--=======  single related slider product  =======-->
                        
                        <div class="gf-product related-slider-product">
                            <div class="image">
                                <a href="single-product.html">
                                    <span class="onsale">Sale!</span>
                                    <img src="frontend-asset/assets_2/images/products/product03.jpg" class="img-fluid" alt="">
                                </a>
                                <div class="product-hover-icons">
                                    <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                    <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                    <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                    <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-categories">
                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                </div>
                                <h3 class="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                <div class="price-box">
                                    <span class="main-price">$89.00</span>
                                    <span class="discounted-price">$80.00</span>
                                </div>
                            </div>
                            
                        </div>
                        
                        <!--=======  End of single related slider product  =======-->
                        <!--=======  single related slider product  =======-->
                        
                        <div class="gf-product related-slider-product">
                            <div class="image">
                                <a href="single-product.html">
                                    <span class="onsale">Sale!</span>
                                    <img src="frontend-asset/assets_2/images/products/product04.jpg" class="img-fluid" alt="">
                                </a>
                                <div class="product-hover-icons">
                                    <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                    <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                    <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                    <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-categories">
                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                </div>
                                <h3 class="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                <div class="price-box">
                                    <span class="main-price">$89.00</span>
                                    <span class="discounted-price">$80.00</span>
                                </div>
                            </div>
                            
                        </div>
                        
                        <!--=======  End of single related slider product  =======-->
                        <!--=======  single related slider product  =======-->
                        
                        <div class="gf-product related-slider-product">
                            <div class="image">
                                <a href="single-product.html">
                                    <span class="onsale">Sale!</span>
                                    <img src="frontend-asset/assets_2/images/products/product05.jpg" class="img-fluid" alt="">
                                </a>
                                <div class="product-hover-icons">
                                    <a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
                                    <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
                                    <a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
                                    <a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-categories">
                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                </div>
                                <h3 class="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                <div class="price-box">
                                    <span class="main-price">$89.00</span>
                                    <span class="discounted-price">$80.00</span>
                                </div>
                            </div>
                            
                        </div>
                        
                        <!--=======  End of single related slider product  =======-->
                        
                    </div>
                    
                    <!--=======  End of related product slider wrapper  =======-->
                </div>
            </div>
        </div>
    </div>
    
    <!--=====  End of Related product slider  ======-->	
</section>
<!-- ======= Footer ======= -->

@include('frontend.includes.footer')

<!-- End Footer -->
  @endsection