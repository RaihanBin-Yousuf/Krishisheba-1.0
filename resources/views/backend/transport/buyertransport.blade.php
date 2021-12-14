@extends('backend.layouts.master')
@section('content')
<link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <div class="p-4">
        
        <div class="row">
            <div class="col">
                <h3 class="green">পরিবহনের অর্থ প্রদান ইতিহাস</h3>
            </div>
            <div class="col text-right">
                <a href="{{route('buyerpaymentlist')}}" class="btn btn-primary"><h3>পণ্য</h3></a>
                <a href="{{route('buyertransportlist')}}" class="btn btn-secondary"><h3>পরিবহন</h3></a>
            </div>
        </div>
        <div class="transportpaymentconfirm" id="react_buyer_transport_pay_list"></div>
    </div>
@endsection
<!-- Js files for this page -->
<!-- <script src="{{ asset('frontend-asset/home_page/js/main.js') }}"></script> -->
<script src="{{ mix('js/app.js') }}" defer></script>