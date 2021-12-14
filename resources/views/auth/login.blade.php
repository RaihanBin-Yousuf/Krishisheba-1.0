@extends('frontend.home.master')
@section('title','Login Page')
@section('home')
 <!-- ======= Top Bar and header ======= -->

 @include('frontend.includes.topbar-and-header')

 <!-- =======End Top Bar and header ======= -->
<div class="content">
  <div class="user-session"><br>
    <div class="container user-session__container">
    <div class="user-session__form">
      <h2><green>প্রবেশ করুন</green></h2>
      <form method="POST" action="{{ route('login') }}">
        @csrf
          <div class="form-group">
            <label class="icofont-phone" for="user_mobileno">মোবাইল নাম্বার</label>
            <input id="mobile" type="tel" name="mobile" value="{{ old('mobile') }}" autocomplete="mobile" autofocus required class="form-control @error('mobile') is-invalid @enderror" placeholder=" 01********** "  />
            @error('mobile')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
          </div>

          <div class="form-group">
            <label class="icofont-ui-password" for="user_password"> পাসওয়ার্ড</label>
            <input id="password-field" type="password" name="password" value="{{ old('password') }}" autocomplete="password" autofocus required class="form-control @error('password') is-invalid @enderror">
            <span toggle="#password-field" class="fa fa-fw fa-eye-slash fa-lg field-icon toggle-password"></span>
            @error('password')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="remember" id="remember">

                <label class="form-check-label" for="remember">
                আমাকে মনে রাখবেন
                </label>
            </div>
          <div class="actions">
            <input style="outline: none; border: none;" type="submit" value="প্রবেশ করুন" class="btn btn-solid btn--full" data-disable-with="Login" />
          </div>
        </form>  
    </div>
      <div class="user-session__links">
        @if (Route::has('password.request'))
        <a href="{{ route('password.request') }}">আপনি কি পাসওয়ার্ড ভুলে গেছেন?</a><br />
        @endif
        @if (Route::has('register'))
        <a href="{{ route('register') }}">এখনও নিবন্ধন করেননি? নিবন্ধন করুন</a><br />
        @endif
      </div>
    </div>
  </div>
</div>
@endsection