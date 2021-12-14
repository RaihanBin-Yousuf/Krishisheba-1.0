
<section>
    <!-- ======= Top Bar ======= -->
    <div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
     <div class="container d-flex">
       <div class="contact-info mr-auto">
         <i class="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
         <i class="icofont-phone"></i> +1 5589 55488 55
       </div>
         <!-- <div class="social-links">   
           <a href="login.html" class="User"><i class="icofont-user-suited"></i> <b>প্রবেশ</b></i></a>
         </div> -->
         <button><a href="{{route('login') }}"><i class="icofont-user-suited"></i> <b>প্রবেশ</b></i></a></button>
         
         <a href="{{ route('register') }}" class="get-started-btn scrollto">প্রবেশ / নিবন্ধন</a> 
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
           <li><a href="#howitsworks">কিভাবে কাজ করে</a></li>
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
         </ul>
       </nav><!-- .nav-menu -->
     </div>
   </header><!-- End Header -->
   </section>