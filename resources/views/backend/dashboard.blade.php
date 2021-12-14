@extends('backend.layouts.master')
@section('title','Dashboard')
@section('content')
@if(auth()->user()->role == 'admin' or auth()->user()->role == 'farmer' or auth()->user()->role == 'seller'  or auth()->user()->role == 'buyer'  or auth()->user()->role == 'transport' )
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">আমার প্রোফাইল</a></li>
                  <li class="breadcrumb-item active">প্রোফাইল</li>
                </ol>
              </div>
            </div>
          </div><!-- /.container-fluid -->
        </section>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- left column -->
            <div class="col-md-7">
              <!-- general form elements -->
                <div class="card card-info">
                    <div class="card-header">
                      <a style="font-size: 30px;" class="btn btn float-left">আমার প্রোফাইল</a>
                        <!-- <a class="btn btn-outline-primary float-right" href="{{route('users.index')}}"><i class="fas fa-sign-in-alt"></i>  Users Table </a> -->
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12 form-group text-center">
                                <label for="profile_image">প্রোফাইল ছবি</label>
                                <div>
                                    <img style="height: 150px; width: 150px; border-radius: 50%;" src="{{asset('/storage/profile/'.auth()->user()->profile_img)}}"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                        <!-- <div class="col-md-4 ">
                            <div class="form-group text-center">
                              <label for="exampleProductName">আমার আইডি নম্বর:</label>
                              <div>
                              {{auth()->user()->id}}
                              </div>
                            </div>
                          </div> -->

                          <div class="col-md-4 ">
                            <div class="form-group text-center">
                              <label for="exampleProductName">নাম:</label>
                              <div>
                              {{auth()->user()->name}}
                              </div>
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="form-group text-center">
                              <label for="exampleProductCategory ">ইমেইল:</label>
                              <div>{{auth()->user()->email}}</div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group text-center">
                              <label for="exampleProductCategory ">মোবাইল নম্বর:</label>
                              <div>{{auth()->user()->mobile}}</div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group text-center">
                              <label for="exampleProductCategory ">আমি একজন:</label>
                              <div>{{auth()->user()->role}}</div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group text-center">
                              <label for="exampleProductCategory ">ঠিকানা:</label>
                              <div>{{auth()->user()->address}}</div>
                            </div>
                          </div>

                          <div class="col-md-4">
                            <div class="form-group text-center">
                              <label for="exampleProductCategory ">জন্ম তারিখ:</label>
                              <div>{{auth()->user()->birth_date}}</div>
                            </div>
                          </div>
                          
                          <div class="col-md-4">
                            <div class="form-group text-center">
                              <label for="exampleProductCategory ">এনআইডি নম্বর:</label>
                              <div>{{auth()->user()->nid}}</div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group text-center">
                              <label for="exampleProductCategory ">নিবন্ধনের সময়:</label>
                              <!-- F - A full textual representation of a month (January through December)
                              M - A short textual representation of a month (Jan through Dec) -->
                              <div>{{\Carbon\Carbon::parse(auth()->user()->created_at)->format('d-F-Y')}}</div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group text-center">
                              <label for="exampleProductCategory ">সর্বশেষ আপডেট:</label>
                              <div>{{\Carbon\Carbon::parse(auth()->user()->updated_at)->format('d-F-Y')}}</div>
                            </div>
                          </div>
                          <!-- <div class="col-md-4">
                              <div class="form-group text-center">
                                  <label for="nid image">এনআইডি ছবি</label>
                                  <div>
                                      <img style="height: 200px; width: 350px;" class="nidimg" src="{{asset('/storage/nidcard/'.auth()->user()->nid_front_img)}}" alt="nid image" />
                                  </div>
                              </div>
                          </div> -->
                        </div>
                        <div class="row">
                          <div class="col-md-12 offset-md-4">
                                  <a href="{{route('updateprofile')}}" type="submit" class="btn btn-info">
                                  প্রোফাইল আপডেট করুন
                                  </a>
                                
                          </div>
                        </div>
                    <div>       
                </div>
            </div>
        </div>
    </section>
    @endif
    @if(auth()->user()->role == 'sadmin' )
        <section class="content">
              <div class="container-fluid">
                <br>
                <div id="react_dashboard" class="dashboard">       
                </div>        
              </div><!-- /.container-fluid -->
        </section>
    @endif
@endsection


<script src="{{ mix('js/app.js') }}" defer></script>