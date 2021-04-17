@extends('frontend.home.master')
@section('home')
 <!-- ======= Top Bar and header ======= -->

 @include('frontend.includes.topbar-and-header')

 <!-- =======End Top Bar and header ======= -->


<section>
	<div class="shop-page-container mb-50">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 order-3 order-lg-2">
					<!--=======  sidebar area  =======-->
					
					<div class="sidebar-area">
                        
						<!--=======  single sidebar  =======-->
						<div class="sidebar">
							<div class="row form-filter_product">
								<div class="col-sm-2 col-md-3 col-lg-2">
								  <img class="form-filter-image" src="{{ asset('frontend-asset/market/icons/riceicon1.png') }}" alt="2591fa81cf29ff7bd588c662fd620b1e" />
								</div>
								<div class="col-sm-6 col-md-9 col-lg-10">
								  <h4>চাউল </h4>
								</div>
							</div>
							<div class="mb-15 form-group">
								<label class="filter__label" for="name">প্রকারভেদ</label>
								<select name="search[2]" id="search_2" class="form-control">
								<option disabled selected value="">নির্বাচন করুন</option>  
								<option value="5">আউশ ধান</option>
								<option value="4">আমন ধান</option>
								<option value="25">বোরো ধান</option></select>
							</div>
					
							<div class="mb-15 form-group">
								<label class="filter__label" for="name">ধানের জাত</label>
								<select name="search[3]" id="search_3" class="form-control">
								<option disabled selected value="">নির্বাচন করুন</option>  
								<option value="111">বিআর১ (চান্দিনা)</option>
								<option value="136">বিআর২ (মালা)</option>
								<option value="135">বিআর৩ (বিপ্লব)</option>
								<option value="134">বিআর৪ (ব্রিশাইল)</option>
								<option value="131">বিআর৭(ব্রি বালাম)</option>
								<option value="130">বিআর৮ (আশা)</option>
								<option value="129">বিআর৯ (সুফলা)</option>
								<option value="128">বিআর১৯ (মঙ্গল)</option>
								<option value="54">বিআর২৩ (দিশারী)</option>
								<option value="979">বিআর২৫ (নয়াপাজাম)</option>
								</select>
							</div>
							<div class="mb-15 form-group">
								<label class="filter__label" for="name">উৎপাদনের ধরন</label>
								<select name="search[120]" id="search_120" class="form-control">
								<option disabled selected value="">নির্বাচন করুন</option>  
								<option value="435">সমন্বিত উৎপাদনের</option>
								<option value="436">জৈব উৎপাদনের</option>
								<option value="434">প্রচলিত উৎপাদনের </option>
								</select>
							</div>
							<div class="mb-15 form-group">
								<label class="control-label">বিভাগ</label> 
								<select name="divisions" id="divisions" class="form-control input-lg" onchange="divisionsList();" >
								<option disabled selected value="">নির্বাচন করুন</option>
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
							<div class="mb-15 form-group">
								<label class="control-label">জেলা</label> 
								<select class="form-control input-lg" name="" id="distr" onchange="thanaList();">
								<option disabled selected value="">নির্বাচন করুন</option>
								</select>
							</div>
							<div class="mb-15 form-group">
								<label for="field-5" class="control-label">থানা</label> 
								<select class="form-control input-lg" name="Police Station" id="polic_sta">
								<option disabled selected>নির্বাচন করুন</option>
								</select>
							</div>	
							<div class="mb-15 form-group">
								<label class="filter__label" for="immediate_delivery">জরুরী বিতরণ</label>
							<input class="immediate-delivery-checkbox" type="checkbox" value="1" id="immediate_delivery_value" />
							</div>	
							<div class="mb-15 form-group">
								<label class="filter__label" for="ppt">মূল্য পরিসীমা</label> (৳)<br/>
								<input type="text" name="interval[price_per_ton][start]" id="interval_price_per_ton_start" class="form-interval" step="any" />
								<!-- <span>to</span> -->
								<span style="font-size: 10px;">থেকে</span>
								<input type="text" name="interval[price_per_ton][end]" id="interval_price_per_ton_end" class="form-interval" step="any" />
							</div>	
							<div class="mb-15 form-group">
								<h3 class="sidebar-title">Filter By Price</h3>
								<div class="sidebar-price">
									<div id="price-range"></div>
									<input type="text" id="price-amount" readonly>
								</div>
							</div>
							<div class="compare-btns">
								<a href="#" class="clear-all">Clear all</a>
								<a href="#" class="compare">Search</a>
							</div>
						</div>                     
						<!--=======  End of single sidebar  =======-->
					</div>
					<!--=======  End of sidebar area  =======-->
				</div>


				<div class="col-lg-8 order-1 order-lg-2 mb-sm-35 mb-xs-35">
					<!--=======  Shop header  =======-->
					
					<div class="shop-header mb-35">
						<div class="row">
							<div class="col-lg-4 col-md-4 col-sm-12 d-flex align-items-center">

								<!--=======  view mode  =======-->
								
								<div class="view-mode-icons mb-xs-10">
									<a class="active" href="#" data-target="grid"><i class="fa fa-th"></i></a>
									<a href="#" data-target="list"><i class="fa fa-list"></i></a>
								</div>
								
								<!--=======  End of view mode  =======-->
								
								
							</div>
							<div class="col-lg-8 col-md-8 col-sm-12 d-flex flex-column flex-sm-row justify-content-between align-items-left align-items-sm-center">
								<!--=======  Sort by dropdown  =======-->
								
								<div class="sort-by-dropdown d-flex align-items-center mb-xs-10">
									<p class="mr-10">Sort By: </p>
									<select name="sort-by" id="sort-by" class="nice-select">
										<option value="0">Sort By Popularity</option>
										<option value="0">Sort By Average Rating</option>
										<option value="0">Sort By Newness</option>
										<option value="0">Sort By Price: Low to High</option>
										<option value="0">Sort By Price: High to Low</option>
									</select>
								</div>
								
								<!--=======  End of Sort by dropdown  =======-->

								<p class="result-show-message">Showing 1–12 of 41 results</p>
							</div>
						</div>
					</div>
					
					<!--=======  End of Shop header  =======-->

					<!--=======  Grid list view  =======-->
					
					<div class="shop-product-wrap grid row no-gutters mb-35">
						
						    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
								<!--=======  Grid view product  =======-->
								
								<div class="gf-product shop-grid-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product03.jpg') }}" class="img-fluid" alt="">
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
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
									</div>
									
								</div>
								
								<!--=======  End of Grid view product  =======-->
	
								<!--=======  Shop list view product  =======-->
								
								<div class="gf-product shop-list-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product03.jpg') }}" class="img-fluid" alt="">
										</a>
										<div class="product-hover-icons">
											<a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
										</div>
									</div>
									<div class="product-content">
										<div class="product-categories">
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box mb-20">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
										<p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
										<div class="list-product-icons">
											<a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
											<a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
											<a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
										</div>
									</div>
									
								</div>
							
							<!--=======  End of Shop list view product  =======-->
							</div>
	
							<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
								<!--=======  Grid view product  =======-->
								
								<div class="gf-product shop-grid-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product04.jpg') }}" class="img-fluid" alt="">
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
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
									</div>
									
								</div>
								
								<!--=======  End of Grid view product  =======-->
	
								<!--=======  Shop list view product  =======-->
								
								<div class="gf-product shop-list-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product04.jpg') }}" class="img-fluid" alt="">
										</a>
										<div class="product-hover-icons">
											<a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
										</div>
									</div>
									<div class="product-content">
										<div class="product-categories">
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box mb-20">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
										<p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
										<div class="list-product-icons">
											<a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
											<a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
											<a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
										</div>
									</div>
									
								</div>
							
							<!--=======  End of Shop list view product  =======-->
							</div>
	
							<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
								<!--=======  Grid view product  =======-->
								
								<div class="gf-product shop-grid-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product05.jpg') }}" class="img-fluid" alt="">
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
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
									</div>
									
								</div>
								
								<!--=======  End of Grid view product  =======-->
	
								<!--=======  Shop list view product  =======-->
								
								<div class="gf-product shop-list-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product05.jpg') }}" class="img-fluid" alt="">
										</a>
										<div class="product-hover-icons">
											<a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
										</div>
									</div>
									<div class="product-content">
										<div class="product-categories">
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box mb-20">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
										<p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
										<div class="list-product-icons">
											<a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
											<a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
											<a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
										</div>
									</div>
									
								</div>
							
							<!--=======  End of Shop list view product  =======-->
							</div>
	
							<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
								<!--=======  Grid view product  =======-->
								
								<div class="gf-product shop-grid-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product06.jpg') }}" class="img-fluid" alt="">
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
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
									</div>
									
								</div>
								
								<!--=======  End of Grid view product  =======-->
	
								<!--=======  Shop list view product  =======-->
								
								<div class="gf-product shop-list-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product06.jpg') }}" class="img-fluid" alt="">
										</a>
										<div class="product-hover-icons">
											<a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
										</div>
									</div>
									<div class="product-content">
										<div class="product-categories">
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box mb-20">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
										<p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
										<div class="list-product-icons">
											<a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
											<a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
											<a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
										</div>
									</div>
									
								</div>
							
							<!--=======  End of Shop list view product  =======-->
							</div>
	
							<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
								<!--=======  Grid view product  =======-->
								
								<div class="gf-product shop-grid-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product07.jpg') }}" class="img-fluid" alt="">
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
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
									</div>
									
								</div>
								
								<!--=======  End of Grid view product  =======-->
	
								<!--=======  Shop list view product  =======-->
								
								<div class="gf-product shop-list-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product07.jpg') }}" class="img-fluid" alt="">
										</a>
										<div class="product-hover-icons">
											<a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
										</div>
									</div>
									<div class="product-content">
										<div class="product-categories">
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box mb-20">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
										<p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
										<div class="list-product-icons">
											<a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
											<a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
											<a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
										</div>
									</div>
									
								</div>
							
							<!--=======  End of Shop list view product  =======-->
							</div>
	
							<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
								<!--=======  Grid view product  =======-->
								
								<div class="gf-product shop-grid-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product08.jpg') }}" class="img-fluid" alt="">
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
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
									</div>
									
								</div>
								
								<!--=======  End of Grid view product  =======-->
	
								<!--=======  Shop list view product  =======-->
								
								<div class="gf-product shop-list-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product08.jpg') }}" class="img-fluid" alt="">
										</a>
										<div class="product-hover-icons">
											<a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
										</div>
									</div>
									<div class="product-content">
										<div class="product-categories">
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box mb-20">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
										<p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
										<div class="list-product-icons">
											<a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
											<a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
											<a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
										</div>
									</div>
									
								</div>
							
							<!--=======  End of Shop list view product  =======-->
							</div>
	
							<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
								<!--=======  Grid view product  =======-->
								
								<div class="gf-product shop-grid-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product10.jpg') }}" class="img-fluid" alt="">
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
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
									</div>
									
								</div>
								
								<!--=======  End of Grid view product  =======-->
	
								<!--=======  Shop list view product  =======-->
								
								<div class="gf-product shop-list-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product10.jpg') }}" class="img-fluid" alt="">
										</a>
										<div class="product-hover-icons">
											<a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
										</div>
									</div>
									<div class="product-content">
										<div class="product-categories">
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box mb-20">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
										<p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
										<div class="list-product-icons">
											<a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
											<a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
											<a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
										</div>
									</div>
									
								</div>
							
							<!--=======  End of Shop list view product  =======-->
							</div>
	
							<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
								<!--=======  Grid view product  =======-->
								
								<div class="gf-product shop-grid-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product11.jpg') }}" class="img-fluid" alt="">
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
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
									</div>
									
								</div>
								
								<!--=======  End of Grid view product  =======-->
	
								<!--=======  Shop list view product  =======-->
								
								<div class="gf-product shop-list-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product11.jpg') }}" class="img-fluid" alt="">
										</a>
										<div class="product-hover-icons">
											<a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
										</div>
									</div>
									<div class="product-content">
										<div class="product-categories">
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box mb-20">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
										<p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
										<div class="list-product-icons">
											<a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
											<a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
											<a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
										</div>
									</div>
									
								</div>
							
							<!--=======  End of Shop list view product  =======-->
							</div>
	
							<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
								<!--=======  Grid view product  =======-->
								
								<div class="gf-product shop-grid-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product12.jpg') }}" class="img-fluid" alt="">
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
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
									</div>
									
								</div>
								
								<!--=======  End of Grid view product  =======-->
	
								<!--=======  Shop list view product  =======-->
								
								<div class="gf-product shop-list-view-product">
									<div class="image">
										<a href="{{ route('paddysingle-product') }}">
											<span class="onsale">Sale!</span>
											<img src="{{ asset('frontend-asset/assets_2/images/products/product12.jpg') }}" class="img-fluid" alt="">
										</a>
										<div class="product-hover-icons">
											<a href="#" data-tooltip="Quick view" data-toggle = "modal" data-target="#quick-view-modal-container"> <span class="icon_search"></span> </a>
										</div>
									</div>
									<div class="product-content">
										<div class="product-categories">
											<a>Fast Foods</a>,
											<a>Vegetables</a>
										</div>
										<h3 class="product-title"><a href="{{ route('paddysingle-product') }}">Ornare sed consequat nisl</a></h3>
										<div class="price-box mb-20">
											<span class="main-price">$89.00</span>
											<span class="discounted-price">$80.00</span>
										</div>
										<p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni.</p>
										<div class="list-product-icons">
											<a href="#" data-tooltip="Add to cart"> <span class="icon_cart_alt"></span></a>
											<a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> </a>
											<a href="#" data-tooltip="Compare"> <span class="arrow_left-right_alt"></span> </a>
										</div>
									</div>
									
								</div>
							
							<!--=======  End of Shop list view product  =======-->
							</div>
						
					</div>
					
					<!--=======  End of Grid list view  =======-->

					<!--=======  Pagination container  =======-->
					
					<div class="pagination-container">
						<div class="container">
							<div class="row">
								<div class="col-lg-12">
									<!--=======  pagination-content  =======-->
									
									<div class="pagination-content text-center">
										<ul>
											<li><a class="active" href="#">1</a></li>
											<li><a href="#">2</a></li>
											<li><a href="#">3</a></li>
											<li><a href="#">4</a></li>
											<li><a href="#"><i class="fa fa-angle-right"></i></a></li>
										</ul>
									</div>
									
									<!--=======  End of pagination-content  =======-->
								</div>
							</div>
						</div>
					</div>
					
					<!--=======  End of Pagination container  =======-->

				</div>
			</div>
		</div>
	</div>
	
	<!--=====  End of Shop page container  ======-->





	<!--=============================================
	=            Quick view modal         =
	=============================================-->
	
	<div class="modal fade quick-view-modal-container" id="quick-view-modal-container" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-lg-5 col-md-6 col-xs-12">
							<!-- product quickview image gallery -->
							<div class="product-image-slider">
								<!--Modal Tab Content Start-->
								<div class="tab-content product-large-image-list" id="myTabContent">
									<div class="tab-pane fade show active" id="single-slide1" role="tabpanel" aria-labelledby="single-slide-tab-1">
										<!--Single Product Image Start-->
										<div class="single-product-img img-full">
											<img src="{{ asset('frontend-asset/assets_2/images/products/product01.jpg') }}" class="img-fluid" alt="">
										</div>
										<!--Single Product Image End-->
									</div>
									<div class="tab-pane fade" id="single-slide2" role="tabpanel" aria-labelledby="single-slide-tab-2">
										<!--Single Product Image Start-->
										<div class="single-product-img img-full">
											<img src="{{ asset('frontend-asset/assets_2/images/products/product02.jpg') }}" class="img-fluid" alt="">
										</div>
										<!--Single Product Image End-->
									</div>
									<div class="tab-pane fade" id="single-slide3" role="tabpanel" aria-labelledby="single-slide-tab-3">
										<!--Single Product Image Start-->
										<div class="single-product-img img-full">
											<img src="{{ asset('frontend-asset/assets_2/images/products/product03.jpg') }}" class="img-fluid" alt="">
										</div>
										<!--Single Product Image End-->
									</div>
									<div class="tab-pane fade" id="single-slide4" role="tabpanel" aria-labelledby="single-slide-tab-4">
										<!--Single Product Image Start-->
										<div class="single-product-img img-full">
											<img src="{{ asset('frontend-asset/assets_2/images/products/product04.jpg') }}" class="img-fluid" alt="">
										</div>
										<!--Single Product Image End-->
									</div>
								</div>
								<!--Modal Content End-->
								<!--Modal Tab Menu Start-->
								<div class="product-small-image-list"> 
									<div class="nav small-image-slider" role="tablist">
										<div class="single-small-image img-full">
											<a data-toggle="tab" id="single-slide-tab-1" href="#single-slide1"><img src="{{ asset('frontend-asset/assets_2/images/products/product01.jpg') }}"
												class="img-fluid" alt=""></a>
										</div>
										<div class="single-small-image img-full">
											<a data-toggle="tab" id="single-slide-tab-2" href="#single-slide2"><img src="{{ asset('frontend-asset/assets_2/images/products/product02.jpg') }}"
												class="img-fluid" alt=""></a>
										</div>
										<div class="single-small-image img-full">
											<a data-toggle="tab" id="single-slide-tab-3" href="#single-slide3"><img src="{{ asset('frontend-asset/assets_2/images/products/product03.jpg') }}"
												class="img-fluid" alt=""></a>
										</div>
										<div class="single-small-image img-full">
											<a data-toggle="tab" id="single-slide-tab-4" href="#single-slide4"><img src="{{ asset('frontend-asset/assets_2/images/products/product04.jpg') }}"
												alt=""></a>
										</div>
									</div>
								</div>
								<!--Modal Tab Menu End-->
							</div>
							<!-- end of product quickview image gallery -->
						</div>
						<div class="col-lg-7 col-md-6 col-xs-12">
							<!-- product quick view description -->
							<div class="product-feature-details">
								<h2 class="product-title mb-15">Kaoreet lobortis sagittis laoreet</h2>

								<h2 class="product-price mb-15"> 
									<span class="main-price">$12.90</span> 
									<span class="discounted-price"> $10.00</span>
								</h2>

								<p class="product-description mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
								

								<div class="cart-buttons mb-20">
									<div class="pro-qty mr-10">
										<input type="text" value="1">
									</div>
									<div class="add-to-cart-btn">
										<a href="#"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
									</div>
								</div>

						
								<div class="social-share-buttons">
									<h3>share this product</h3>
									<ul>
										<li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
										<li><a class="pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
									</ul>
								</div>
							</div>
							<!-- end of product quick view description -->
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
	<!--=====  End of Quick view modal  ======-->
</section>

<!-- ======= Footer ======= -->

@include('frontend.includes.footer')

<!-- End Footer -->
  @endsection