@extends('backend.layouts.master')
@section('content')
<link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <div class="p-4">
        <h2 class="green">পণ্যের অর্থ প্রদান নিশ্চিত করুন</h2>
        <div class="paymentconfirm" id="react_payment"></div>
    </div>
@endsection
<!-- Js files for this page -->
<!-- <script src="{{ asset('frontend-asset/home_page/js/main.js') }}"></script> -->
<script src="{{ mix('js/app.js') }}" defer></script>