@extends('backend.layouts.master')
@section('content')
<link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div> 
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item active">হোম</li>
              <li class="breadcrumb-item"><a href="#">পণ্য যোগ করুন</a></li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <div style="padding: 0 2rem;" class="content">
        <div class="container"> <!-- <a class="btn btn-info float-right btn-sm" href="#"><i class="fa fa-list"> </i> Add New User</a> -->
            <div class="text-center">
                  <h2 style="color: #17a2b8;font-weight: bold;">নতুন পণ্য যোগ করুন</h2>
            </div><br>
            <div class="managePostCreate" id="react_manage_posts"></div>
            {{-- <div class="test" id="react_test"></div> --}}
           
        </div>
    </div>
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
    <!-- /.content -->
@endsection
<!-- Js files for this page -->
<!-- <script src="{{ asset('frontend-asset/home_page/js/main.js') }}"></script> -->
<script src="{{ mix('js/app.js') }}" defer></script>