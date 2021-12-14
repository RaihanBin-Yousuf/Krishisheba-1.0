<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>@yield('title')</title>
  <meta content="" name="descriptison">
  <meta content="" name="keywords">
  <!-- Favicons -->
  <link href="{{ asset('frontend-asset/home_page/img/ourcountry.jpg') }}" rel="icon">
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
 <link rel="manifest" href="./manifest.json">

  <link href="{{ asset('frontend-asset/home_page/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
  <link href="{{ asset('frontend-asset/home_page/vendor/bootstrap/css/bootstrap.css') }}" rel="stylesheet">
  <link href="{{ asset('frontend-asset/home_page/vendor/icofont/icofont.min.css') }}" rel="stylesheet">
  <link href="{{ asset('frontend-asset/home_page/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
  <link href="{{ asset('frontend-asset/home_page/vendor/animate.css/animate.min.css') }}" rel="stylesheet">
  <link href="{{ asset('frontend-asset/home_page/vendor/owl.carousel/assets/owl.carousel.min.css') }}" rel="stylesheet">
  <link href="{{ asset('frontend-asset/home_page/vendor/venobox/venobox.css') }}" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="{{ asset('frontend-asset/home_page/css/style.css') }}" rel="stylesheet">

  <!-- CSS
	============================================ -->

	<!-- Bootstrap CSS -->
	<link href="{{ asset('frontend-asset/assets_2/css/bootstrap.min.css') }}" rel="stylesheet">
	
  <!-- FontAwesome CSS -->
	<link href="{{ asset('frontend-asset/assets_2/css/font-awesome.min.css') }}" rel="stylesheet">

	<!-- Elegent CSS -->
	<link href="{{ asset('frontend-asset/assets_2/css/elegent.min.css') }}" rel="stylesheet">

	<!-- Plugins CSS -->
	<link href="{{ asset('frontend-asset/assets_2/css/plugins.css') }}" rel="stylesheet">

	<!-- Helper CSS -->
	<link href="{{ asset('frontend-asset/assets_2/css/helper.css') }}" rel="stylesheet">

	<!-- Main CSS -->
	<link href="{{ asset('frontend-asset/assets_2/css/main.css') }}" rel="stylesheet">

	<!-- Modernizer JS -->
	<script src="{{ asset('frontend-asset/assets_2/js/vendor/modernizr-2.8.3.min.js') }}"></script>
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">
  

  <!-- =======================================================
  * Template Name: Green - v2.2.0
  * Template URL: https://bootstrapmade.com/green-free-one-page-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>
 

{{-- home content --}}
@yield('home')
{{--End home content --}}

<a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

<!-- Vendor JS Files -->
<script src="{{ mix('js/app.js') }}" defer></script>
<script src="{{ asset('active/main.js') }}"></script>
<script src="{{ asset('frontend-asset/home_page/vendor/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('frontend-asset/home_page/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('frontend-asset/home_page/vendor/jquery.easing/jquery.easing.min.js') }}"></script>
<script src="{{ asset('frontend-asset/home_page/vendor/php-email-form/validate.js') }}"></script>
<script src="{{ asset('frontend-asset/home_page/vendor/owl.carousel/owl.carousel.min.js') }}"></script>
<script src="{{ asset('frontend-asset/home_page/vendor/isotope-layout/isotope.pkgd.min.js') }}"></script>
<script src="{{ asset('frontend-asset/home_page/vendor/venobox/venobox.min.js') }}"></script>

<!-- Template Main JS File -->
<script src="{{ asset('frontend-asset/home_page/js/main.js') }}"></script>
<!-- JS
============================================ -->
<!-- jQuery JS -->
<script src="{{ asset('frontend-asset/assets_2/js/vendor/jquery.min.js') }}"></script>

<!-- Popper JS -->
<script src="{{ asset('frontend-asset/assets_2/js/popper.min.js') }}"></script>


<!-- Plugins JS -->
<script src="{{ asset('frontend-asset/assets_2/js/plugins.js') }}"></script>

<!-- Main JS -->
{{-- <script src="{{ asset('frontend-asset/assets_2/js/main.js') }}"></script> --}}
<script>
    $(document).ready(function(){
        $('input[type="radio"]').click(function(){
            var inputValue = $(this).attr("value");
            var targetBox = $("." + inputValue);
            $(".section").not(targetBox).hide();
            $(targetBox).show();
        });
    });

    $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
    });
  </script>


</body>

</html>