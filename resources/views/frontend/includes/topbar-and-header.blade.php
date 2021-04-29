<section>
    <!-- ======= Top Bar ======= -->
    <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
     <div class="container d-flex">
       <div class="contact-info mr-auto">
         <i class="icofont-envelope"></i> <a href="mailto:krishisheva@gmail.com">krishisheva@gmail.com</a>
         <i class="icofont-phone"></i> +1 5589 55488 55
       </div>
         <!-- <div class="social-links">   
           <a href="login.html" class="User"><i class="icofont-user-suited"></i> <b>প্রবেশ</b></i></a>
         </div> -->
         <button style="outline: none; background: none; border: none; cursor: pointer;color:#5cb874;font-size:15px"><a href="{{route('login') }}"><i class="icofont-user-suited"></i> <b>প্রবেশ</b></i></a></button>
         
         <a href="{{ route('register') }}" class="get-started-btn scrollto">নিবন্ধন</a> 
       </div>
     </div>
   </div>
   
   <!-- ======= Header ======= -->
   <header id="header" class="fixed-top">
     <div class="container d-flex align-items-center">
       <h1 class="logo mr-auto"><a href="{{ route('home-page-index') }}"href="index.html">কৃষিসেবা</a></h1>
       <!-- Uncomment below if you prefer to use an image logo -->
       <!-- <a href="index.html" class="logo mr-auto"><img src="frontend-asset/home_page/img/logo.png') }}" alt="" class="img-fluid"></a>-->
   
       <nav class="nav-menu d-none d-lg-block">
         <ul>
           <li><a href="{{ route('home-page-index') }}">হোম</a></li>
           <li><a href="#whyus">আমাদের সমাধান</a></li>
           <li><a href="#services">সেবাসমূহ</a></li>
           <li><a href="{{ route('findproduct') }}">পণ্য</a></li>
           <!-- <li><a href="#team">টিম</a></li> -->
           <li><a href="#contact">যোগাযোগ</a></li>
           <li class="drop-down"><a href="">আমাদের সম্পর্কে আরও</a>
             <ul>
               <li><a href="{{ route('team') }}">আমাদের টিম</a></li>
               <li><a href="whyus.html">আমাদের সমাধান</a></li>
               <li><a  href="{{ route('faq') }}">জিজ্ঞাসা</a></li>
             </ul>
           </li>
           <li></li>
           <div class="shopping-cart" id="shopping-cart">
							<a href="cart.html">
								<div class="cart-icon d-inline-block">
									<span class="icon_bag_alt"></span>
								</div>
								<div class="cart-info d-inline-block">
									<p>Shopping Cart 
										<span>
											0 items
										</span>
									</p>
								</div>
							</a>
							<!-- end of shopping cart -->

							<!-- cart floating box -->
							<div class="cart-floating-box" id="cart-floating-box">
								<div class="cart-items">
									<div class="cart-float-single-item d-flex">
										<span class="remove-item"><a href="#"><i class="fa fa-times"></i></a></span>
										<div class="cart-float-single-item-image">
											<a href="single-product.html"><img src="frontend-asset/assets_2/images/products/product01.jpg" class="img-fluid" alt=""></a>
										</div>
										<div class="cart-float-single-item-desc">
											<p class="product-title"> <a href="single-product.html">Duis pulvinar obortis eleifend </a></p>
											<p class="price"><span class="count">1x</span> $20.50</p>
										</div>
									</div>
									<div class="cart-float-single-item d-flex">
										<span class="remove-item"><a href="#"><i class="fa fa-times"></i></a></span>
										<div class="cart-float-single-item-image">
											<a href="single-product.html"><img src="frontend-asset/assets_2/images/products/product02.jpg" class="img-fluid" alt=""></a>
										</div>
										<div class="cart-float-single-item-desc">
											<p class="product-title"> <a href="single-product.html">Fusce ultricies dolor vitae</a></p>
											<p class="price"><span class="count">1x</span> $20.50</p>
										</div>
									</div>
								</div>
									<div class="floating-cart-btn text-center">
										<a class="float-right" href="">View Cart</a>
									</div>
							</div>
						</div>
         </ul>
       </nav><!-- .nav-menu -->
     </div>
   </header><!-- End Header -->
   </section>