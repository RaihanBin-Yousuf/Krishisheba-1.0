@extends('backend.layouts.master')
@section('content')
<link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <div class="p-4">
        <div class="row">
            <div class="col">
                <h1>Product Payment Confirmation</h1>
            </div>
            <div class="col text-right">
                <a href="{{route('buyerpaymentlist')}}" class="btn btn-primary"><h3>Payment</h3></a>
                <a href="{{route('buyertransportlist')}}" class="btn btn-secondary"><h3>Transport</h3></a>
            </div>
        </div>
        <div class="paymentconfirm" id="react_buyer_payment"></div>
    </div>
@endsection
<!-- Js files for this page -->
<!-- <script src="{{ asset('frontend-asset/home_page/js/main.js') }}"></script> -->
<script src="{{ mix('js/app.js') }}" defer></script>