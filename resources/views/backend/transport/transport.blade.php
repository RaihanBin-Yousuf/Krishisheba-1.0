@extends('backend.layouts.master')
@section('content')
<link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <div class="p-4">
        <h1>পরিবহন অর্থ প্রদান নিশ্চিত করুন</h1>
        
        <div class="transportpaymentconfirm" id="react_transport_pay_list"></div>
    </div>
@endsection
<!-- Js files for this page -->
<!-- <script src="{{ asset('frontend-asset/home_page/js/main.js') }}"></script> -->
<script src="{{ mix('js/app.js') }}" defer></script>