@extends('frontend.home.master')
@section('home')
 <!-- ======= Top Bar and header ======= -->

 @include('frontend.includes.topbar-and-header')

 <!-- =======End Top Bar and header ======= -->
<section id="team" class="team section-bg">
    <div class="container">

      <div class="section-titlehome">
        <h2>আমাদের  <green>TEAM<green></h2>
        </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div class="member">
            <img src="{{ asset('frontend-asset/home_page/img/team/team-4.1.jpg') }}" alt="">
            <h4>RAIHAN IDDIN</h4>
            <span> Frontend And Backend end Developer </span>
            <div class="social">
              <a href=""><i class="icofont-twitter"></i></a>
              <a href=""><i class="icofont-facebook"></i></a>
              <a href=""><i class="icofont-instagram"></i></a>
              <a href=""><i class="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div class="member">        
            <img src="{{ asset('frontend-asset/home_page/img/team/team-2.jpg') }}" alt="">
            <h4>EMTIYAZ</h4>
            <span>Frontend And Backend end Developer</span>
            <div class="social">
              <a href=""><i class="icofont-twitter"></i></a>
              <a href=""><i class="icofont-facebook"></i></a>
              <a href=""><i class="icofont-instagram"></i></a>
              <a href=""><i class="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div class="member">
            <img src="{{ asset('frontend-asset/home_page/img/team/team-3.jpg') }}" alt="">
            <h4>SHORFUDDIN ROBIN</h4>
            <span> Backend end Developer</span>
            <div class="social">
              <a href=""><i class="icofont-twitter"></i></a>
              <a href=""><i class="icofont-facebook"></i></a>
              <a href=""><i class="icofont-instagram"></i></a>
              <a href=""><i class="icofont-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
        <div class="member">
          <img src="{{ asset('frontend-asset/home_page/img/team/team-1.jpg') }}" alt="">
          <h4>RAIHAN IDDIN</h4>
          <span> Frontend And Backend end Developer </span>
          <div class="social">
            <a href=""><i class="icofont-twitter"></i></a>
            <a href=""><i class="icofont-facebook"></i></a>
            <a href=""><i class="icofont-instagram"></i></a>
            <a href=""><i class="icofont-linkedin"></i></a>
          </div>
        </div>
      </div>
      
    </div>
  </section>
  
<!-- ======= Footer ======= -->

@include('frontend.includes.footer')

<!-- End Footer -->
  @endsection