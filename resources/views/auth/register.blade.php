
@extends('frontend.home.master')
@section('home')
 <!-- ======= Top Bar and header ======= -->

@include('frontend.includes.topbar-and-header')
<section>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="row">
                            <div class="col-md-6">
                                <label required="required" for="user_user_type">আমি একজন*</label>
                            </div>
                        </div>
                        <hr class="mt-0">
                        <div class="row">
                            <div class="col-lg-2 col-md-12 form-group">
                                <input required="required" type="radio" value="buyer" name="role" id="user_type_buyer" />
                                <label for="user_user_type_buyer">বিক্রেতা</label>
                            </div>
                            <div class="col-lg-2 col-md-12 form-group">
                                <input required="required" type="radio" value="seller" name="role" id="user_type_seller" />
                                <label for="user_user_type_seller">ক্রেতা</label>
                            </div>
                            <div class="col-lg-3 col-md-12 form-group">
                                <input required="required" type="radio" value="transport" name="role" id="user_type_both" />
                                <label for="user_user_type_both">পরিবহনের মালিক</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label for="user-name">নাম*</label>
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                                    @error('name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                            </div>
                        
                            <div class="col-md-6 form-group">
                                <label for="mobile">mobile*</label>
                                <input id="mobile" type="mobile" class="form-control @error('mobile') is-invalid @enderror" name="mobile" value="{{ old('mobile') }}" required autocomplete="mobile">
                                    @error('mobile')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label for="user-name">email*</label>
                                <input id="email" type="text" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                            </div>
                        
                            <div class="col-md-6 form-group">
                                <label for="nid">nid*</label>
                                <input id="nid" type="nid" class="form-control @error('nid') is-invalid @enderror" name="nid" value="{{ old('nid') }}" required autocomplete="nid">
                                    @error('nid')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label for="password">password*</label>
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        
                            <div class="col-md-6 form-group">
                                <label for="password-confirm">Confirm Password*</label>
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" autocomplete="nid">
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-3 form-group">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
@endsection
