@extends('backend.layouts.master')
@section('content')
<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="{{route('updatepassword')}}">পাসওয়ার্ড পরিবর্তন করুন</a></li>
              <li class="breadcrumb-item active">হোম</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
</section>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card card-info">
                <!-- <div class="card-header">{{ __('Change Password') }}</div> -->
                <div class="card-header">
                    <a style="font-size: 20px;" class="btn btn float-left">পাসওয়ার্ড পরিবর্তন করুন</a>
                </div>

                <div class="card-body">
                    <form method="POST" action="{{ route('user-password.update') }}">
                        @csrf
                        @method('PUT')


                        @if (session('status') == "password-updated")
                            <div class="alert alert-success">
                                Password updated successfully.
                            </div>
                        @endif

                        <div class="form-group row">
                            <label for="current_password" class="col-md-4 col-form-label text-md-right">{{ __('বর্তমান পাসওয়ার্ড') }}</label>

                            <div class="col-md-6">
                                <input id="current_password" type="password" class="form-control @error('current_password', 'updatePassword') is-invalid @enderror" name="current_password" required autofocus>

                                @error('current_password', 'updatePassword')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('নতুন পাসওয়ার্ড') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password', 'updatePassword') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password', 'updatePassword')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('পাসওয়ার্ড নিশ্চিত করুন') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="mb-0 form-group row">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-info">
                                    {{ __('সংরক্ষণ') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection