@extends('frontend.home.master')
@section('home')
 <!-- ======= Top Bar and header ======= -->

 @include('frontend.includes.topbar-and-header')

 <!-- =======End Top Bar and header ======= -->
<div class="content">
  <div class="user-session">
    <div class="container user-session__container">
     <!--  <div class="user-session__logo">
        <img class="img-logo" src="../assets/market/logos/logo-12.png" alt="Agrimp color" />
      </div> -->
    </br></br></br></br></br>
    <div class="user-session__form">
      <h2><green>প্রবেশ করুন</green></h2>
      <form method="POST" action="{{ route('login') }}">
        @csrf
          <div class="form-group">
            <label class="icofont-phone" for="user_mobileno">মোবাইল নম্বর*</label>
            <input id="mobile" type="text" name="mobile" :value="old('mobile')" required autofocus class="form-control @error('mobile') is-invalid @enderror" autocomplete="mobile" placeholder=" 01816******* "  pattern="^\d{11}$" />
            @error('mobile')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
          </div>

          <div class="form-group">
            <label class="icofont-ui-password" for="user_password"> পাসওয়ার্ড*</label>
            <em>(6 characters minimum)</em>
            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
            @error('password')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
            @enderror
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" name="remember" id="remember">

                <label class="form-check-label" for="remember">
                    Remember Me
                </label>
            </div>
          <div class="actions">
            <input style="outline: none; border: none;" type="submit" value="Login" class="btn btn-solid btn--full" data-disable-with="Login" />
          </div>
        </form>  
    </div>
    

      <div class="user-session__links">
        @if (Route::has('password.request'))
        <a href="{{ route('password.request') }}">Forgot your password?</a><br />
        @endif
        @if (Route::has('register'))
        <a href="{{ route('register') }}">Not registered yet? Sign up</a><br />
        @endif
      </div>
    </div>
  </div>
</div>

@endsection