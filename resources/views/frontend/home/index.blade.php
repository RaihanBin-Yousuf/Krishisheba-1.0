@extends('frontend.home.master')

@section('home')

<main id="main">
    
<!-- ======= Top Bar and header ======= -->

@include('frontend.includes.topbar-and-header')

<!-- =======End Top Bar and header ======= -->

<!-- ======= Hero Section ======= -->
    
@include('frontend.includes.hero')
   
<!-- End Hero -->

<!--=============================================
=            category slider         =
=============================================-->

@include('frontend.includes.topcategory-slider')

<!--=====  End of category slider  ======-->

<!--=============================================
=            Tab slider         =
=============================================-->

@include('frontend.includes.tab-slider')

<!--=====  End of Tab slider  ======-->

<!-- ======= About Us Section ======= -->
@include('frontend.includes.about-us')
<!-- End About Us Section -->

<!--How Its works Section -->
@include('frontend.includes.how-its-works')

<!-- End How Its works Section -->

<!-- ======= Services Section ======= -->
@include('frontend.includes.service')

<!-- End Services Section -->

<!-- ======= Cta Section ======= -->

@include('frontend.includes.cta')

<!-- End Cta Section -->

<!-- ======= Contact Section ======= -->

@include('frontend.includes.contact')

<!-- End Contact Section -->

<!-- ======= Footer ======= -->

@include('frontend.includes.footer')

<!-- End Footer -->

</main>
<!-- End #main -->
@endsection